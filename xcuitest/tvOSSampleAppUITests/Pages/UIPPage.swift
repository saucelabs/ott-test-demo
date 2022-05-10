//
//  UIPPage.swift
//  tvOSSampleAppUITests
//
//  Created by Benjamin Karran on 06.05.22.
//

import XCTest

class UIPPage {
    let app: XCUIApplication
    
    static func waitForFocus(_ el: XCUIElement, timeout: TimeInterval) -> Bool {
        for _ in 1...Int(timeout) {
            if el.hasFocus { return true }
            sleep(1)
        }
        return false
    }
    
    static func scrollAllTheWayUp() {
        for _ in 1...10 {
            XCUIRemote.shared.press(.up)
        }
    }
    
    init(_ app: XCUIApplication) {
        self.app = app
        if (!self.validate()) {
            sleep(10) // Wait for view to be fully loaded
            print(app.debugDescription)
            
            // Print stack trace to find correct subclass that triggered this failure
            print("Stack frame of class where validate() failed:")
            print("   \(Thread.callStackSymbols[1])")
            XCTAssert(false)
        }
    }
    
    /// This function must be overridden by a subclass and return true iff the correct page is open.
    /// When validation fails, the view hierarchy will be printed and the test fails.
    func validate() -> Bool {
        return false // This function must be overridden in sublcass
    }
    
}
