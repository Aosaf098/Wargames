import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react";
import Superstar from "./Superstar";

const Superstars = () => {

    interface SuperstarsInterface {
        id: number;
        name: string;
        rating: number;
        finisher: string;
        weight: string;
        nickname: string;
        price: number;
        image: string
    }


    const [superstars, setSuperstars] = useState<SuperstarsInterface[]>([])

    useEffect(() => {
        const getSuperstars = async() => {
            const response = await fetch('/superstars.json')
            const result = await response.json()
            setSuperstars(result)
        }
        getSuperstars()
    }, [])

    console.log('Superstars:', superstars)
  return (
    <>
    <div className="w-3/4 mx-auto">
        <div className="flex items-center justify-center">
            <span className="text-4xl font-bold bg-red-500 px-8 py-2 rounded-sm">Superstars</span>
        </div>
        <div className="flex items-center justify-end gap-6 my-8">
            <Button className="p-6">Available</Button>
            <Button className="p-6">Selected</Button>
        </div>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 justify-items-center">
            {
                superstars.map((superstar) => <Superstar key={superstar?.id} superstar={superstar} />)
            }
        </div>
    </div>
    </>
  )
}

export default Superstars
