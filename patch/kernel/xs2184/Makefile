include $(TOPDIR)/rules.mk
include $(INCLUDE_DIR)/kernel.mk

PKG_NAME:=xs2184
PKG_RELEASE:=1

include $(INCLUDE_DIR)/package.mk

define KernelPackage/xs2184
  SECTION:=kernel
  CATEGORY:=Kernel modules
  SUBMENU:=Network Devices
  TITLE:=PSE xs2184 support
  DEPENDS:=+kmod-i2c-gpio
  FILES:= $(PKG_BUILD_DIR)/xs2184.ko
  AUTOLOAD:=$(call AutoProbe,xs2184)
endef

include $(INCLUDE_DIR)/kernel-defaults.mk

define Build/Compile
endef

$(eval $(call KernelPackage,xs2184))
