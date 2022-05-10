//
//  tvOSSampleAppUITests.swift
//  tvOSSampleAppUITests
//
//  Created by Benjamin Karran on 05.05.22.
//

import XCTest

class tvOSSampleAppUITests: XCTestCase {

    override func setUpWithError() throws {
        // Put setup code here. This method is called before the invocation of each test method in the class.

        // In UI tests it is usually best to stop immediately when a failure occurs.
        continueAfterFailure = false

        // In UI tests it’s important to set the initial state - such as interface orientation - required for your tests before they run. The setUp method is a good place to do this.
    }

    override func tearDownWithError() throws {
        // Put teardown code here. This method is called after the invocation of each test method in the class.
    }

    func test1VideoPlayback() throws {
        // UI tests must launch the application that they test.
        let app = XCUIApplication()
        app.launch()

        let videoPage = UIPVideoPage(app)
        let playbackTime: UInt32 = 15
        
        sleep(playbackTime)
        
        // Assert that video didn't stall
        let stats = videoPage.videoStats
        XCTAssertEqual(
            stats.reduce(0, { $0 + $1.numberOfStalls }),
            0
        )
        
        // Assert that video started within 5s
        let maxStartupTime = 5.0
        XCTAssertGreaterThan(
            stats.reduce(0.0, { $0 + $1.durationWatched }),
            Double(playbackTime) - maxStartupTime
        )
        
    }
}
