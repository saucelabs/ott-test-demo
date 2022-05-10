//
//  UIPageVideoPage.swift
//  tvOSSampleAppUITests
//
//  Created by Benjamin Karran on 05.05.22.
//

import XCTest

class UIPVideoPage: UIPPage  {
    
    override func validate() -> Bool {
        return self.app.otherElements["video_player"].waitForExistence(timeout: 10)
    }
    
    var videoStats: [XCAVPlayerItemAccessLogEvent]  {
        get {
            let statsField = self.app.staticTexts["video_stats"].firstMatch
            XCTAssert(statsField.waitForExistence(timeout: 10))
            let statsStr = statsField.label
            let lines = statsStr
                .split(separator: "\n")
                .dropFirst(3)
            
            print(lines)
            let headerStr = lines.first!
            let header: [String] = headerStr
                .split(separator: " ")
                .dropFirst(1)
                .map{ String($0) }
            
            return lines.dropFirst(1).map { s in
                let values = s.split(separator: " ")
                    .map{ String($0) }
                return XCAVPlayerItemAccessLogEvent(Dictionary(uniqueKeysWithValues: zip(header, values)))
            }
        }
    }
}

// VIEW HIERARCHY
//
//→Application, 0x104e16540, pid: 35825, label: 'ESPN'
//   Window, 0x104e16850, {{0.0, 0.0}, {960.0, 540.0}}
//     Other, 0x104e16d60, {{0.0, 0.0}, {960.0, 540.0}}
//       Other, 0x104e17110, {{0.0, 0.0}, {960.0, 540.0}}
//         Other, 0x104e17460, {{0.0, 0.0}, {960.0, 540.0}}
//           Other, 0x104e16e70, {{0.0, 0.0}, {960.0, 540.0}}
//             Other, 0x104e16f80, {{0.0, 0.0}, {960.0, 540.0}}
//   Window (Main), 0x104e17220, {{0.0, 0.0}, {1920.0, 1080.0}}
//     Other, 0x104e17330, {{0.0, 0.0}, {1920.0, 1080.0}}
//       Other, 0x104e181b0, {{0.0, 0.0}, {1920.0, 1080.0}}
//         Other, 0x104e182c0, {{0.0, 0.0}, {1920.0, 1080.0}}
//           Other, 0x104e183d0, {{0.0, 0.0}, {1920.0, 1080.0}}
//             StaticText, 0x104e184e0, {{960.0, 60.0}, {0.0, 0.0}}, identifier: 'video_stats', label: '#Version: 1.0
//#Software: AppleCoreMedia/1.0.0.19K53 (Apple TV; U; CPU OS 15_2 like Mac OS X; en_us)
//#Date: 2022/01/31 12:14:53.053
//#Fields: date time uri cs-guid s-ip s-ip-changes sc-count c-duration-downloaded c-start-time c-duration-watched bytes c-observed-bitrate sc-indicated-bitrate c-stalls c-frames-dropped c-startup-time c-overdue c-reason c-observed-min-bitrate c-observed-max-bitrate c-observed-bitrate-sd s-playback-type sc-wwan-count c-switch-bitrate
//2022/01/31 12:14:44.044 https://devstreaming-cdn.apple.com/videos/wwdc/2018/103zvtnsrnrijr/103/1920/1920.m3u8 2845C021-B768-4ACC-A151-FB1F94391B56 17.253.73.204 0 5 60.060 0.000 8.965 47275420 36979117.000 6864535 0 0 1.384 0 - - - 4819107.144 VOD 0 -
//'
//             Other, 0x104e188e0, {{80.0, 84.0}, {1760.0, 936.0}}, identifier: 'video_player'
//               Other, 0x104e189f0, {{80.0, 84.0}, {1760.0, 936.0}}
//                 Other, 0x104e18b00, {{80.0, 84.0}, {1760.0, 936.0}}
//               Other, 0x104e18c10, {{80.0, 84.0}, {1760.0, 936.0}}
//                 Other, 0x104e18d20, {{80.0, 84.0}, {1760.0, 936.0}}
//                   Other, 0x104e18e30, {{80.0, 84.0}, {1760.0, 936.0}}
//               Other, 0x104e18f40, {{80.0, 84.0}, {1760.0, 936.0}}
//               Other, 0x104e19050, {{80.0, 84.0}, {1760.0, 936.0}}, Focused
//                 Other, 0x104e19160, {{80.0, 84.0}, {1760.0, 936.0}}
//                   Other, 0x104e19270, {{80.0, 84.0}, {1760.0, 936.0}}
//                 Other, 0x104e19380, {{80.0, 84.0}, {1760.0, 936.0}}
//               Other, 0x104e19490, {{80.0, 84.0}, {1760.0, 936.0}}
//               Other, 0x104e195a0, {{80.0, 84.0}, {1760.0, 936.0}}
