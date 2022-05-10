XCODEPROJ=tvOSSampleApp.xcodeproj
BUILD_DIR=./build

# naming convention: <target>.ipa
all: tvOSSampleApp.ipa tvOSSampleAppUITests.ipa

%.ipa:
	mkdir -p $(BUILD_DIR)
	xcodebuild clean build -project $(XCODEPROJ) -target $* CODE_SIGNING_REQUIRED=NO CODE_SIGNING_ALLOWED=NO CODE_SIGN_IDENTITY="" | tee $(BUILD_DIR)/build-log.txt
	cat $(BUILD_DIR)/build-log.txt | grep -o '[^ ]*\.app$$' | tail -1 >$(BUILD_DIR)/app.path
	cd $(BUILD_DIR) \
		&& rm -rf Payload \
		&& mkdir Payload
	cp -r $$(cat $(BUILD_DIR)/app.path) $(BUILD_DIR)/Payload/
	cd $(BUILD_DIR) \
		&& rm -f $*.ipa \
		&& zip -r $*.ipa Payload

.PHONY: clean
clean:
	rm -rf $(BUILD_DIR)
