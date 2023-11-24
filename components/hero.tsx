import VideoThumb from '@/public/images/hero-image-01.png'
import VideoThumb1 from '@/public/images/hero-image-02.jpg'
import VideoThumb2 from '@/public/images/hero-image-03.jpg'
import VideoThumb3 from '@/public/images/hero-image-04.jpg'
import ModalVideo from '@/components/modal-video'
import Image from "next/image";

export default function Hero() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">

        {/* Hero content */}
        <div className="relative pt-20 pb-10 md:pt-30 md:pb-16">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-8 md:pb-8">
            <h1 className="h3 mb-4 text-white" data-aos="fade-up"><a href={"https://voyeurhouse.com/live/"}>Watch 24/7 FREE RealLifeCam Voyeur Videos [LIVE]</a></h1>
            <p className="text-l text-white" data-aos="fade-up" data-aos-delay="200"><a href={"https://voyeurhouse.com/live/"}>Live Cams, Replays and Archive from hundreds of voyeur cams, creators and locations!</a></p>
          </div>

          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={1024}
            thumbHeight={576}
            thumbAlt="Modal video thumbnail"
            video="/videos/video.mp4"
            videoWidth={1920}
            videoHeight={1080} />

          <p className="text-m text-white mt-2 ml-0 text-left lg:ml-10"><a href={"https://voyeurhouse.com/live/"}>You may also like: </a></p>

          <div className="flex grow items-center justify-center mt-2">
            <div className="m-1 lg:m-2">
              <a href={"https://voyeurhouse.com/live/"}>
                <Image className="hover:border" src={VideoThumb1} width={280} height={200} alt={"Recommended Video 1"} />
              </a>
            </div>
            <div className="m-1 lg:m-2">
              <a href={"https://voyeurhouse.com/replay"}>
                <Image className="hover:border" src={VideoThumb2} width={280} height={200} alt={"Recommended Video 2"} />
              </a>
            </div>
            <div className="m-1 lg:m-2">
              <a href={"https://voyeurhouse.com/live/"}>
                <Image className="hover:border" src={VideoThumb3} width={280} height={200} alt={"Recommended Video 3"} />
              </a>
            </div>
          </div>

          <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center mt-4">
            <div data-aos="fade-up" data-aos-delay="200">
              <a className="btn text-white bg-green-500 hover:bg-green-700 w-full mb-8 sm:w-auto sm:mb-0" href="https://voyeurhouse.com/live/">Continue watching</a>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
