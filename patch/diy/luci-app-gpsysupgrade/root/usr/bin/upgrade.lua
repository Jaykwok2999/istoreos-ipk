#!/usr/bin/lua

local fs = require "nixio.fs"
local sys = require "luci.sys"
local util = require "luci.util"
local i18n = require "luci.i18n"
local ipkg = require("luci.model.ipkg")
local api = require "luci.model.cbi.gpsysupgrade.api"
local Variable1 = "ywt114"
local Variable2 = "OpenWrt"
local Variable3 = "x86_64"
local Variable4 = "6.1"

function get_system_version()
	local system_version = luci.sys.exec("[ -f '/etc/openwrt_version' ] && echo -n `cat /etc/openwrt_version` | tr -d '\n'")
    return system_version
end

function to_flash(url)
    if not url or url == "" then
        return {code = 1, error = i18n.translate("Download url is required.")}
    end

    sys.call("/bin/rm -f /tmp/firmware_download.*")

    local tmp_file = util.trim(util.exec("mktemp -u -t firmware_download.XXXXXX"))

    local result = api.exec(api.wget, {api._unpack(api.wget_args), "-O", tmp_file, url}, nil, api.command_timeout) == 0

    if not result then
        api.exec("/bin/rm", {"-f", tmp_file})
        return {
            code = 1,
            error = i18n.translatef("File download failed or timed out: %s", url)
        }
    end

	file = tmp_file

    if not file or file == "" or not fs.access(file) then
        return {code = 1, error = i18n.translate("Firmware file is required.")}
    end

	local result = api.exec("/sbin/sysupgrade", {"-k", file}, nil, api.command_timeout) == 0


    if not result or not fs.access(file) then
        return {
            code = 1,
            error = i18n.translatef("System upgrade failed")
        }
    end

    return {code = 0}
end


    if not model or model == "" then model = api.auto_get_model() end
    
    local download_url,remote_version,needs_update,remoteformat,sysverformat,currentTimeStamp,dateyr
	local version_file = "/tmp/version.txt"
	system_version = get_system_version()
	sysverformat = system_version
	currentTimeStamp = os.date("%Y%m%d")
	if model == "x86_64" then
		api.exec(api.wget, {api._unpack(api.wget_args), "-O", version_file, "https://github.com/" ..Variable1.. "/" ..Variable2.. "/releases/download/" ..Variable3.. "_" ..Variable4.. "/version.txt"}, nil, api.command_timeout)
		remote_version = luci.sys.exec("echo -n $(curl -fsSL https://github.com/" ..Variable1.. "/" ..Variable2.. "/releases/download/" ..Variable3.. "_" ..Variable4.. "/version.txt) | tr -d '\n'")
		dateyr = remote_version
		remoteformat = remote_version
		if remoteformat > sysverformat and currentTimeStamp > remoteformat then needs_update = true else needs_update = false end
		if fs.access("/sys/firmware/efi") then
			download_url = "https://github.com/" ..Variable1.. "/" ..Variable2.. "/releases/download/" ..Variable3.. "_" ..Variable4.. "/" ..dateyr.. "-" ..Variable4.. "-openwrt-x86-64-generic-squashfs-combined-efi.img.gz"
		else
			download_url = "https://github.com/" ..Variable1.. "/" ..Variable2.. "/releases/download/" ..Variable3.. "_" ..Variable4.. "/" ..dateyr.. "-" ..Variable4.. "-openwrt-x86-64-generic-squashfs-combined.img.gz"
		end
	else
		local needs_update = false
		return {
            code = 1,
            error = i18n.translate("Can't determine MODEL, or MODEL not supported.")
			}
	end
	

    if needs_update and not download_url then
        return {
            code = 1,
            now_version = system_version,
            version = remote_version,
            error = i18n.translate(
                "New version found, but failed to get new version download url.")
        }
    end

		to_flash(download_url)
