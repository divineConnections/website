"use client";
import { Button } from "@repo/ui/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@repo/ui/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@repo/ui/components/ui/dialog";
import { toast } from "@repo/ui/components/ui/sonner";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@repo/ui/components/ui/carousel";
import Counter from "@repo/ui/components/counter/counter";
import { Badge } from "@repo/ui/components/ui/badge";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@repo/ui/components/ui/avatar";

export default function Page(): JSX.Element {
  return (
    <main className="flex flex-col container max-w-[300px] p-4 gap-y-5">
      <Button onClick={() => toast("hi there 🙋‍♀️")}>Click me</Button>
      <Accordion collapsible type="single">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="destructive">Delete account</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
      <Carousel>
        <CarouselContent>
          <CarouselItem className="h-[300px] bg-slate-700 text-white flex items-center justify-center text-6xl">
            1
          </CarouselItem>
          <CarouselItem className="h-[300px] bg-slate-800 text-white flex items-center justify-center text-6xl">
            2
          </CarouselItem>
          <CarouselItem className="h-[300px] bg-slate-900 text-white flex items-center justify-center text-6xl">
            3
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <Counter cy="counter"/>

      {/* badges */}
      <div className="flex gap-2 flex-wrap">
        <Badge variant="default">Primary</Badge>
        <Badge variant="secondary">Secondar</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="outline">Outline</Badge>
      </div>

      {/* Avatar */}
      <Avatar>
        <AvatarImage alt="avatar" src="https://i.pravatar.cc/300" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
    </main>
  );
}
