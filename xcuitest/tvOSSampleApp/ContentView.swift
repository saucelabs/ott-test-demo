//
//  ContentView.swift
//  tvOSSampleApp
//
//  Created by Benjamin Karran on 05.05.22.
//

import SwiftUI
import AVKit

struct ContentView: View {
    @StateObject var player = Player()
    
    var body: some View {
        Text(player.videoStats)
            .accessibilityIdentifier("video_stats")
            .frame(width: 0, height: 0)

        VideoPlayer(player: player.player)
            .accessibilityIdentifier("video_player")
            .onAppear {
                player.player.play()
            }
            .onDisappear {
                player.player.pause()
            }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
