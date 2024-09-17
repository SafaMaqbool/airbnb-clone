import { Counter } from "@/app/components/Counter";
import { CreationBottomBar } from "@/app/components/CreationBottomBar";
import { Card, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function DescriptionPage() {
  return (
    <>
      <div className="w-3/5 mx-auto">
        <h2 className="text-3xl font-semibold tracking-tight transition-colors">
          Please describe your home as good as you can!
        </h2>
      </div>

      <form>
        <div className="mx-auto w-3/5 mt-10 flex flex-col gap-y-5 mb-36">
          <div className="flex flex-col gap-y-2 ">
            <Label>Title</Label>
            <Input
              name="title"
              type="text"
              required
              placeholder="short and simple..."
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <Label>Description</Label>
            <Textarea
              name="description"
              required
              placeholder="please describe your home"
            />
          </div>

          <div className="flex flex-col gap-y-2">
            <Label>Price</Label>
            <Input
              name="price"
              type="number"
              required
              placeholder="price per night in USD"
              min={10}
            />
          </div>

          <div className="flex flex-col gap-y-2">
            <Label>Image</Label>
            <Input name="image" type="file" required />
          </div>

          <Card>
            <CardHeader className="flex flex-col gap-y-2">
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <h2 className="underline font-medium">Guests</h2>
                  <p className="text-muted-foreground text-sm">
                    How many guests do you want?
                  </p>
                </div>

                <Counter name="guest"/>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <h2 className="underline font-medium">Rooms</h2>
                  <p className="text-muted-foreground text-sm">
                    How many rooms do you have?
                  </p>
                </div>

                <Counter name="room"/>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <h2 className="underline font-medium">Bathrooms</h2>
                  <p className="text-muted-foreground text-sm">
                    How many bathrooms do you have?
                  </p>
                </div>

                <Counter name="bathroom"/>
              </div>
            </CardHeader>
          </Card>
        </div>
        <CreationBottomBar/>
      </form>
    </>
  );
}