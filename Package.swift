// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "YamodadsCapacitor",
    platforms: [.iOS(.v14)],
    products: [
        .library(
            name: "YamodadsCapacitor",
            targets: ["YaMobAdsPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", from: "7.0.0")
    ],
    targets: [
        .target(
            name: "YaMobAdsPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/YaMobAdsPlugin"),
        .testTarget(
            name: "YaMobAdsPluginTests",
            dependencies: ["YaMobAdsPlugin"],
            path: "ios/Tests/YaMobAdsPluginTests")
    ]
)