import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./Carousel";

export function ImagesCarousel({ arrayOfImages }: { arrayOfImages: string[] }) {
  return (
    <Carousel>
      <CarouselContent>
        {arrayOfImages.map((image) => {
          const imageUrl = `${import.meta.env.VITE_API_URL}/${image}`;

          return (
            <CarouselItem key={image} className="h-full">
              <img
                src={imageUrl}
                alt={image}
                className="object-cover w-full h-64 md:h-[30rem]"
              />
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2" />
      <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
    </Carousel>
  );
}
