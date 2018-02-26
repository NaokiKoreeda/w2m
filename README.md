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
```
