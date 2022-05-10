//
//  Player.swift
//  tvOSSampleApp
//
//  Created by Benjamin Karran on 05.05.22.
//

import Foundation
import AVKit

class Player: ObservableObject {
    @Published var videoStats: String = ""
    var player: AVPlayer
    var timer: Timer? = nil
    
    init() {
        self.player = AVPlayer(url: URL(string: "https://devstreaming-cdn.apple.com/videos/wwdc/2018/103zvtnsrnrijr/103/hls_vod_mvp.m3u8")!)
        
        let timer = Timer.scheduledTimer(withTimeInterval: 1.0, repeats: true) { _ in
            if let logData = self.player.currentItem?.accessLog()?.extendedLogData() {
                self.videoStats = String(data: logData, encoding: .utf8) ?? ""
            }
        }
        self.timer = timer
    }
    
}
