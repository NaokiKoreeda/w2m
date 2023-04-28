# w2m
- electron apps.
- Convert shared directories path of windows and mac.

#### example
```
E:\example\1 <--> /Volumes/e/example/1
```

#### packaging
```
for Mac
$ electron -v
v1.4.13
$ electron-packager . w2m --platform=darwin --arch=x64 --electron-version=1.4.13

or

$ npx -v
6.4.1
$ npx electron-packager . w2m --platform=darwin --arch=x64 --electron-version=1.4.13

exist icon file and overwrite options
$ electron-packager . w2m --platform=darwin --arch=x64 --electron-version=18.2.3 --icon=w2m.icns --overwrite
```
