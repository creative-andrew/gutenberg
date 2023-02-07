adb shell input tap 1000 616; \
  sleep 3; \
	for i in {1..20}; do \
  adb shell input text '\ A\ quick\ brown\ fox\ jumps\ over\ the\ lazy\ dog.'; \
	done;
