import { useState } from "react";
import copy from "copy-to-clipboard";

const Index = () => {
    const [videoURL, setVideoURL] = useState("");
    const [thumbnailOptions, setThumbnailOptions] = useState([]);

    const getYouTubeThumbnail = (url) => {
        let regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
        let match = url.match(regExp);

        if (match && match[1].length === 11) {
            const videoURL = match[1];
            const thumbnailBaseUrl = "http://img.youtube.com/vi/";

            const options = [
                { resolution: "HD (1280x720)", code: "maxresdefault" },
                { resolution: "SD (640x480)", code: "sddefault" },
                { resolution: "Normal (480x360)", code: "hqdefault" },
                { resolution: "Medium (320x180)", code: "mqdefault" },
                { resolution: "Low (120x90)", code: "default" },
            ];

            const thumbnailOptions = options.map((option) => ({
                resolution: option.resolution,
                url: `${thumbnailBaseUrl}${videoURL}/${option.code}.jpg`,
            }));

            setThumbnailOptions(thumbnailOptions);
            setVideoURL("");
        } else {
            setThumbnailOptions([]);
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <header className="text-center mb-8" style={{ width: '42%' }}>
                <h1 className="text-3xl font-bold mb-2">
                    Youtube Thumbnail Downloader
                </h1>
                <p className="text-gray-600">
                    Download youtube and vimeo thumbnail images of all quality for free. This application lets you download thumbnails of all quality. Just paste the URL of the video whose thumbnail you want in the input box and click Get Thumbnail Image.
                </p>

                <div className="text-center">
                    <input
                        type="text"
                        className="w-full md:w-1/2 px-4 py-2 border rounded mt-4"
                        placeholder="Enter YouTube URL"
                        value={videoURL}
                        onChange={(e) => setVideoURL(e.target.value)}
                    />
                    <button
                        className="btn-blue mt-2"
                        onClick={() => getYouTubeThumbnail(videoURL)}
                    >
                        Download Thumbnails
                    </button>
                </div>
                {/* Rewritten paragraphs start here */}
                <p className="text-gray-600 mt-4">
                    <strong>Download YT Video Thumbnails</strong>
                </p>
                <p className="text-gray-600">
                    Easily obtain free thumbnail images from any YouTube videos in Full HD (1080), HD (720), SD, and small sizes. This tool supports various formats, including YouTube (HD, HQ, 1080p, 4K) videos.
                </p>
                <p className="text-gray-600">
                    <strong>What Is the Purpose of This YouTube Thumbnail Grabber Website?</strong>
                </p>
                <p className="text-gray-600">
                    People use this YouTube thumbnail downloader website to extract thumbnails from YouTube videos. These thumbnails can be used in presentations, animations, or various other creative activities.
                </p>
                <p className="text-gray-600">
                    <strong>How to Use This YouTube Thumbnail Downloader Website?</strong>
                </p>
                <p className="text-gray-600">
                    Using this website is simple. Copy the URL of the video whose thumbnail you want. Paste the URL into the input box, and the website will automatically generate thumbnails in different sizes for you. Click on the thumbnail download button to save it to your device.
                </p>
                <p className="text-gray-600">
                    <strong>Is It Legal to Download YouTube Thumbnails?</strong>
                </p>
                <p className="text-gray-600">
                    Yes, it is entirely legal to download YouTube video thumbnails. However, it's important to note that both thumbnails and videos are copyrighted materials. Therefore, you should obtain proper authorization from the content creator before reusing them.
                </p>
                <p className="text-gray-600">
                    <strong>Compatibility of This YT Thumbnail Grabber Website</strong>
                </p>
                <p className="text-gray-600">
                    This YouTube thumbnail downloader website works smoothly on most devices, except for iPhones, which have restrictions on saving images. Jailbroken iPhones, on the other hand, do not face this issue. It works well on various Android devices, laptops, and desktop systems.
                </p>
                <p className="text-gray-600">
                    <strong>Is There Any Copyright Risk Associated with YouTube Thumbnails?</strong>
                </p>
                <p className="text-gray-600">
                    Any YouTube screenshot you download remains the copyright of the respective video owner. If you intend to use it for your own work, you should seek permission from the copyright holder. Using these thumbnails outside of YouTube, such as for website logos or Photoshop projects, generally poses fewer copyright-related issues. However, it's always best to obtain permission when possible.
                </p>
                <p className="text-gray-600">
                    <strong>Is Reusing YouTube Thumbnails SEO Friendly?</strong>
                </p>
                <p className="text-gray-600">
                    No, reusing YouTube thumbnails is not considered SEO-friendly. Google indexes most thumbnails on YouTube, making it easy to identify duplicates. To make reused thumbnails more SEO-friendly, consider applying unique effects using software like Photoshop.
                </p>
            </header>
            {thumbnailOptions.length > 0 && (
                <div className="mt-8">
                    <h2 className="text-xl font-semibold mb-4">Thumbnail Options</h2>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {thumbnailOptions.map((option, index) => (
                            <div key={index} className="thumbnail-option">
                                <img src={option.url} alt={`Thumbnail ${index + 1}`} />
                                <button
                                    className="btn-blue mt-2"
                                    onClick={() => copy(option.url)}
                                >
                                    Copy Image URL
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Index;
