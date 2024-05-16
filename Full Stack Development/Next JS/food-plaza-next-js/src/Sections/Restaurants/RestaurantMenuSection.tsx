import HeaderText from "@/components/ui/header-text";
import React from "react";

const RestaurantMenuSection = () => {
  return (
    <>
      <HeaderText text="Menu" />
      <div className="flex w-full overflow-x-auto scroll-smooth no-scrollbar gap-5 ">
        <div className="min-w-56 max-w-60 flex flex-col gap-4  ">
          <img
            className="w-full h-full rounded-xl border-2"
            src="https://s3-alpha-sig.figma.com/img/daa7/038e/9b0bc81bd34456edc1ddf63d1f00d547?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KiDHLr54NOlmP1fQkP46JZH4KhILp2LjOACxXqlkmhLk1WjwmenDeCQHOhqAaAFkpQXsCIzHdddvBPAVAjZUy36LefaJBh43dbuZ~zpP177Gcw1Lqw8jMwDgbkkB4LSMtyJEnAFAgqG4BlIh~txRHRCV27zWmIHCK8bfKPA~rneTSKKfzUSVQJoJZYXy0wfHzTwyCQjYtMI228ZlgXWoT4q9CUk4lQdbH1ugVoXFbaoaW15rI5YaatGueh-Wx51kfG5rhRyuE5YC1dOU7o1NlIiOR8zUXjJ220MLiu8VvctLQi9CG265PvFnqtyiQ0LHEXodxFGu-8Kp08fbtXTiMw__"
            alt=""
          />

          <p className="text-sm font-semibold  sm:text-lg ">Dinning menu</p>
        </div>
        <div className="min-w-56 max-w-60 flex flex-col gap-4 ">
          <img
            className="w-full h-full rounded-xl border-2"
            src="https://s3-alpha-sig.figma.com/img/daa7/038e/9b0bc81bd34456edc1ddf63d1f00d547?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KiDHLr54NOlmP1fQkP46JZH4KhILp2LjOACxXqlkmhLk1WjwmenDeCQHOhqAaAFkpQXsCIzHdddvBPAVAjZUy36LefaJBh43dbuZ~zpP177Gcw1Lqw8jMwDgbkkB4LSMtyJEnAFAgqG4BlIh~txRHRCV27zWmIHCK8bfKPA~rneTSKKfzUSVQJoJZYXy0wfHzTwyCQjYtMI228ZlgXWoT4q9CUk4lQdbH1ugVoXFbaoaW15rI5YaatGueh-Wx51kfG5rhRyuE5YC1dOU7o1NlIiOR8zUXjJ220MLiu8VvctLQi9CG265PvFnqtyiQ0LHEXodxFGu-8Kp08fbtXTiMw__"
            alt=""
          />
          <p className="text-sm font-semibold  sm:text-lg  ">Takeaway menu</p>
        </div>
      </div>
    </>
  );
};

export default RestaurantMenuSection;
