import "swiper";

declare module "swiper" {
  interface SwiperOptions {
    gl?: {
      shader: string;
    };
  }
}
