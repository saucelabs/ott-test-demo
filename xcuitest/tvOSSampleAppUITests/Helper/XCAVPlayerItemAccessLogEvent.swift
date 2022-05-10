//
//  XCAVPlayerItemAccessLogEvent.swift
//  tvOSSampleAppUITests
//
//  Created by Benjamin Karran on 05.05.22.
//
// Proxy of AVPlayerItemAccessLogEvent to be available in XCUITests as XCAVPlayerItemAccessLogEvent

import Foundation
import XCTest

open class XCAVPlayerItemAccessLogEvent : NSObject, NSCopying {
    let data: [String: String]
    
    init(_ data: [String: String]) {
        self.data = data
    }
    
    public func copy(with zone: NSZone? = nil) -> Any {
        return XCAVPlayerItemAccessLogEvent(self.data)
    }
    
    func intValue(_ label: String) -> Int {
        return Int(self.data[label]!)!
    }
    
    func doubleValue(_ label: String) -> Double {
        return Double(self.data[label]!)!
    }

    /**
     @property        numberOfMediaRequests
     @abstract        A count of media read requests.
     @discussion    Value is negative if unknown. A count of media read requests from the server to this client. Corresponds to "sc-count".
                    For HTTP live Streaming, a count of media segments downloaded from the server to this client.
                    For progressive-style HTTP media downloads, a count of HTTP GET (byte-range) requests for the resource.
                     This property is not observable.
     */
    @available(tvOS 9.0, *)
    open var numberOfMediaRequests: Int { get {
        // TODO
        return 0
    } }

    
    /**
     @property        playbackStartDate
     @abstract        The date/time at which playback began for this event. Can be nil.
     @discussion    If nil is returned the date is unknown. Corresponds to "date".
                     This property is not observable.
     */
    open var playbackStartDate: Date? { get {
        // TODO
        return nil
    } }

    
    /**
     @property        URI
     @abstract        The URI of the playback item. Can be nil.
     @discussion    If nil is returned the URI is unknown. Corresponds to "uri".
                     This property is not observable.
     */
    open var uri: String? { get {
        // TODO
        return nil
    } }

    
    /**
     @property        serverAddress
     @abstract        The IP address of the server that was the source of the last delivered media segment. Can be nil.
     @discussion    If nil is returned the address is unknown. Can be either an IPv4 or IPv6 address. Corresponds to "s-ip".
                     This property is not observable.
     */
    open var serverAddress: String? { get {
        // TODO
        return nil
    } }

    
    /**
     @property        numberOfServerAddressChanges
     @abstract        A count of changes to the property serverAddress, see above, over the last uninterrupted period of playback.
     @discussion    Value is negative if unknown. Corresponds to "s-ip-changes".
                     This property is not observable.
     */
    open var numberOfServerAddressChanges: Int { get {
        // TODO
        return 0
    } }

    
    /**
     @property        playbackSessionID
     @abstract        A GUID that identifies the playback session. This value is used in HTTP requests. Can be nil.
     @discussion    If nil is returned the GUID is unknown. Corresponds to "cs-guid".
                     This property is not observable.
     */
    open var playbackSessionID: String? { get {
        // TODO
        return nil
    } }

    
    /**
     @property        playbackStartOffset
     @abstract        An offset into the playlist where the last uninterrupted period of playback began. Measured in seconds.
     @discussion    Value is negative if unknown. Corresponds to "c-start-time".
                     This property is not observable.
     */
    open var playbackStartOffset: TimeInterval { get {
        // TODO
        return 0
    } }

    
    /**
     @property        segmentsDownloadedDuration
     @abstract        The accumulated duration of the media downloaded. Measured in seconds.
     @discussion    Value is negative if unknown. Corresponds to "c-duration-downloaded".
                     This property is not observable.
     */
    open var segmentsDownloadedDuration: TimeInterval { get {
        // TODO
        return 0
    } }

    
    /**
     @property        durationWatched
     @abstract        The accumulated duration of the media played. Measured in seconds.
     @discussion    Value is negative if unknown. Corresponds to "c-duration-watched".
                     This property is not observable.
     */
    open var durationWatched: TimeInterval { get {
        return doubleValue("c-duration-watched")
    } }

    
    /**
     @property        numberOfStalls
     @abstract        The total number of playback stalls encountered.
     @discussion    Value is negative if unknown. Corresponds to "c-stalls".
                     This property is not observable.
     */
    open var numberOfStalls: Int { get {
        return intValue("c-stalls")
    } }

    
    /**
     @property        numberOfBytesTransferred
     @abstract        The accumulated number of bytes transferred.
     @discussion    Value is negative if unknown. Corresponds to "bytes".
                     This property is not observable.
     */
    open var numberOfBytesTransferred: Int64 { get {
        // TODO
        return 0
    } }

    
    /**
     @property        transferDuration
     @abstract        The accumulated duration of active network transfer of bytes. Measured in seconds.
     @discussion    Value is negative if unknown. Corresponds to "c-transfer-duration".
                    This property is not observable.
     */
    @available(tvOS 9.0, *)
    open var transferDuration: TimeInterval { get {
        // TODO
        return 0
    } }

    
    /**
     @property        observedBitrate
     @abstract        The empirical throughput across all media downloaded. Measured in bits per second.
     @discussion    Value is negative if unknown. Corresponds to "c-observed-bitrate".
                     This property is not observable.
     */
    open var observedBitrate: Double { get {
        // TODO
        return 0
    } }

    
    /**
     @property        indicatedBitrate
     @abstract        The throughput required to play the stream, as advertised by the server. Measured in bits per second.
     @discussion    Value is negative if unknown. Corresponds to "sc-indicated-bitrate".
                     This property is not observable.
     */
    open var indicatedBitrate: Double { get {
        // TODO
        return 0
    } }

    
    /**
     @property        indicatedAverageBitrate
     @abstract        Average throughput required to play the stream, as advertised by the server. Measured in bits per second.
     @discussion    Value is negative if unknown. Corresponds to "sc-indicated-avg-bitrate".
     This property is not observable.
     */
    @available(tvOS 10.0, *)
    open var indicatedAverageBitrate: Double { get {
        // TODO
        return 0
    } }

    
    /**
     @property        averageVideoBitrate
     @abstract        The average bitrate of video track if it is unmuxed. Average bitrate of combined content if muxed. Measured in bits per second.
     @discussion    Value is negative if unknown. Corresponds to "c-avg-video-bitrate".
     This property is not observable.
     */
    @available(tvOS 10.0, *)
    open var averageVideoBitrate: Double { get {
        // TODO
        return 0
    } }

    
    /**
     @property        averageAudioBitrate
     @abstract        The average bitrate of audio track. This is not available if audio is muxed with video. Measured in bits per second.
     @discussion    Value is negative if unknown. Corresponds to "c-avg-audio-bitrate".
     This property is not observable.
     */
    @available(tvOS 10.0, *)
    open var averageAudioBitrate: Double { get {
        // TODO
        return 0
    } }

    
    /**
     @property        numberOfDroppedVideoFrames
     @abstract        The total number of dropped video frames.
     @discussion    Value is negative if unknown. Corresponds to "c-frames-dropped".
                     This property is not observable.
     */
    open var numberOfDroppedVideoFrames: Int { get {
        // TODO
        return 0
    } }

    
    /**
     @property        startupTime
     @abstract        The accumulated duration until player item is ready to play. Measured in seconds.
     @discussion    Value is negative if unknown. Corresponds to "c-startup-time".
                    This property is not observable.
     */
    @available(tvOS 9.0, *)
    open var startupTime: TimeInterval { get {
        // TODO
        return 0
    } }

    
    /**
     @property        downloadOverdue
     @abstract        The total number of times the download of the segments took too long.
     @discussion    Value is negative if unknown. Corresponds to "c-overdue".
                    This property is not observable.
     */
    @available(tvOS 9.0, *)
    open var downloadOverdue: Int { get {
        // TODO
        return 0
    } }

    
    /**
     @property        observedMaxBitrate
     @abstract        Maximum observed segment download bit rate.
     @discussion    Value is negative if unknown. Corresponds to "c-observed-max-bitrate".
                    This property is not observable.
     */
    @available(tvOS, introduced: 9.0, deprecated: 15.0, message: "Use observedBitrateStandardDeviation to monitor variance in network bitrate.")
    open var observedMaxBitrate: Double { get {
        // TODO
        return 0
    } }

    
    /**
     @property        observedMinBitrate
     @abstract        Minimum observed segment download bit rate.
     @discussion    Value is negative if unknown. Corresponds to "c-observed-min-bitrate".
                    This property is not observable.
     */
    @available(tvOS, introduced: 9.0, deprecated: 15.0, message: "Use observedBitrateStandardDeviation to monitor variance in network bitrate.")
    open var observedMinBitrate: Double { get {
        // TODO
        return 0
    } }

    
    /**
     @property        observedBitrateStandardDeviation
     @abstract        Standard deviation of observed segment download bit rates.
     @discussion    Value is negative if unknown. Corresponds to "c-observed-bitrate-sd".
                    This property is not observable.
     */
    @available(tvOS 9.0, *)
    open var observedBitrateStandardDeviation: Double { get {
        // TODO
        return 0
    } }

    
    /**
     @property        playbackType
     @abstract        Playback type (LIVE, VOD, FILE).
     @discussion    If nil is returned the playback type is unknown. Corresponds to "s-playback-type".
                    This property is not observable.
     */
    @available(tvOS 9.0, *)
    open var playbackType: String? { get {
        // TODO
        return nil
    } }

    
    /**
     @property        mediaRequestsWWAN
     @abstract        Number of network read requests over WWAN.
     @discussion    Value is negative if unknown. Corresponds to "sc-wwan-count".
                    This property is not observable.
     */
    @available(tvOS 9.0, *)
    open var mediaRequestsWWAN: Int { get {
        // TODO
        return 0
    } }

    
    /**
     @property        switchBitrate
     @abstract        Bandwidth that caused us to switch (up or down).
     @discussion    Value is negative if unknown. Corresponds to "c-switch-bitrate".
                    This property is not observable.
     */
    @available(tvOS 9.0, *)
    open var switchBitrate: Double { get {
        // TODO
        return 0
    } }
}
