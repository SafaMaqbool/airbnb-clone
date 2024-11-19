import Image from "next/image";
import Link from "next/link";
import { useCountries } from "../lib/getCountries";
import { Heart } from "lucide-react";
import {
  AddToFavoritesButton,
  DeleteFromFavoriteButton,
} from "./SubmitButtons";
import { AddToFavorite } from "../actions";

interface iAppProps {
  imagePath: string;
  description: string;
  location: string;
  price: number;
  userId: string | undefined;
  isInFavoritesList: boolean;
  FavoriteId: string;
  homeId: string;
  pathName: string;
}

export function ListingCard({
  description,
  imagePath,
  location,
  price,
  userId,
  FavoriteId,
  homeId,
  isInFavoritesList,
  pathName,
}: iAppProps) {
  const { getCountryByValue } = useCountries();
  const country = getCountryByValue(location);
  return (
    <div className="flex flex-col">
      <div className="relative h-72">
        <Image
          src={`https://jfcwufywhjfvdlouacmu.supabase.co/storage/v1/object/public/images/${imagePath}`}
          alt="Image of House"
          fill
          className="rounded-lg h-full object-cover"
        />
        {userId && (
          <div className="z-10 absolute top-2 right-2">
            {isInFavoritesList ? (
              <form action={DeleteFromFavoriteButton}>
                <input type="hidden" name="favoriteId" value={FavoriteId} />
                <input type="hidden" name="userId" value={userId} />
                <input type="hidden" name="pathName" value={pathName} />
                <DeleteFromFavoriteButton />
              </form>
            ) : (
              <form action={AddToFavorite}>
                <input type="hidden" name="homeId" value={homeId} />
                <input type="hidden" name="userId" value={userId} />
                <input type="hidden" name="pathName" value={pathName} />
                <AddToFavoritesButton />
              </form>
            )}
          </div>
        )}
      </div>

      <Link className="mt-2" href={"/"}>
        <h3 className="font-medium text-base">
          {country?.flag} {country?.label}/{country?.region}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-2 ">
          {description}
        </p>
        <p className="text-muted-foreground pt-2">
          <span className="font-medium text-black">${price}</span>Night
        </p>
      </Link>
    </div>
  );
}
