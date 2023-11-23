import VideoThumb from '@/public/images/hero-image-01.jpg'
import ModalVideo from '@/components/modal-video'

export default function Hero() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">

        {/* Hero content */}
        <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h1 mb-4" data-aos="fade-up">Watch 24/7 FREE RealLifeCam Voyeur Videos [LIVE]</h1>
            <p className="text-xl text-gray-200 mb-8" data-aos="fade-up" data-aos-delay="200">Live Cams, Replays and Archive from hundreds of voyeur cams, creators and locations!</p>
            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div data-aos="fade-up" data-aos-delay="400">
                <a className="btn text-white bg-green-500 hover:bg-green-700 w-full mb-4 sm:w-auto sm:mb-0" href="https://voyeurhouse.com/live/">Watch more cams</a>
              </div>
              <div data-aos="fade-up" data-aos-delay="600">
                <a className="btn text-white bg-gray-700 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="https://voyeurhouse.com/replay/">Learn more</a>
              </div>
            </div>
          </div>

          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={1024}
            thumbHeight={576}
            thumbAlt="Modal video thumbnail"
            video="/videos/video.mp4"
            videoWidth={1920}
            videoHeight={1080} />

          <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center mt-4">
            <div data-aos="fade-up" data-aos-delay="400">
              <a className="btn text-white bg-green-500 hover:bg-green-700 w-full mb-8 sm:w-auto sm:mb-0" href="https://voyeurhouse.com/live/">Continue watching</a>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
