import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { CalendarDays, Clock } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import GlobalApi from "@/app/_utils/GlobalApi";
import { toast } from "sonner";

function BookAppointment({ doctor }) {
  const [date, setDate] = useState(new Date());
  const [timeSlot, setTimeSlot] = useState();
  const [selectedTimeSlot, setSelectedTimeSlot] = useState();
  const [note, setNote] = useState();
  const { user } = useKindeBrowserClient();
  useEffect(() => {
    getTime();
  }, []);

  const getTime = () => {
    const timeList = [];
    for (let i = 10; i <= 12; i++) {
      timeList.push({
        time: i + ":00 AM",
      });
      timeList.push({
        time: i + ":30 AM",
      });
    }
    for (let i = 1; i <= 6; i++) {
      timeList.push({
        time: i + ":00 PM",
      });
      timeList.push({
        time: i + ":30 PM",
      });
    }

    setTimeSlot(timeList);
  };

  const saveBooking = () => {
    const data = {
      data: {
        username: user.given_name + " " + user.family_name,
        email: user.email,
        time: selectedTimeSlot,
        date: date,
        doctors: doctor.id,
        note: note,
      },
    };
    GlobalApi.bookAppointment(data).then((resp) => {
      console.log(resp);
      if (resp) {
        GlobalApi.sendEmail(data)
          .then((resp) => {
            console.log(resp);
          })
          .catch((err) => {
            console.table(err);
          });
        toast("Booking Confirmation sent on Email");
      }
    });
  };

  const isPastDay = (day) => {
    return day <= new Date();
  };
  return (
    <Dialog>
      <DialogTrigger>
        <Button className="mt-3 rounded">Book Appointment</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Book Appointment</DialogTitle>
          <DialogDescription>
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 mt-1">
                {/* Calender  */}
                <div className="flex flex-col gap-3 items-baseline">
                  <h2 className="flex gap-2 items-center">
                    <CalendarDays className="text-primary h-5 w-5" />
                    Select Date
                  </h2>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={isPastDay}
                    className="rounded-md border"
                  />
                </div>
                {/* Time Slot  */}
                <div className=" mt-2 md:mt-0">
                  <h2 className="flex gap-2 items-center mb-3">
                    <Clock className="text-primary h-5 w-5" />
                    Select Time.
                  </h2>
                  <div
                    className="grid grid-cols-3 gap-2 border 
                        rounded-lg p-5"
                  >
                    {timeSlot?.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedTimeSlot(item.time)}
                        className={`p-2 border cursor-pointer
                            text-center hover:bg-primary hover:text-white
                            rounded-full
                            ${
                              item.time == selectedTimeSlot &&
                              "bg-primary text-white"
                            }`}
                      >
                        {item.time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <Textarea
                className="mt-2"
                placeholder="Note"
                onChange={(e) => setNote(e.target.value)}
              />
            </div>
          </DialogDescription>
          <Button
            type="button"
            className="w-fit"
            disabled={!(date && selectedTimeSlot)}
            onClick={() => saveBooking()}
          >
            Submit
          </Button>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default BookAppointment;
