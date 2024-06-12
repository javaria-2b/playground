import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Input } from "@/components/ui/input"

export default function Component() {
  return (
    <div className="flex min-h-screen max-h-full">
      <div className="m-auto w-full  bg-white rounded-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-2">
          <div className="col-span-1 md:col-span-2 flex flex-col h-full">
            <Textarea placeholder="Write a tagline for an ice cream shop" className="flex-1" />
            <div className="flex items-center gap-4 mt-4">
              <Button>Submit</Button>
              <Button variant="ghost" size="icon" className="bg-gray-100 rounded-full">
                <RefreshCwIcon className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
            <Label htmlFor="mode">Mode</Label>
            <div className="flex justify-between">
              <ListIcon className="h-5 w-5" />
              <DownloadIcon className="h-5 w-5" />
              <ViewIcon className="h-5 w-5" />
            </div>
            </div>   
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="model">Model</Label>
                <Select>
                  <SelectTrigger id="model">
                    <SelectValue placeholder="text-davinci-003" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="text-davinci-003">text-davinci-003</SelectItem>
                    <SelectItem value="text-curie-004">text-curie-004</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="temperature">Temperature</Label>
                <Input id="temperature" type="range" min="0" max="1" step="0.01" defaultValue="0.56" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="max-length">Maximum Length</Label>
                <Input id="max-length" type="range" min="1" max="512" step="1" defaultValue="256" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="top-p">Top P</Label>
                <Input id="top-p" type="range" min="0" max="1" step="0.01" defaultValue="0.9" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function DownloadIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  )
}


function ListIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="8" x2="21" y1="6" y2="6" />
      <line x1="8" x2="21" y1="12" y2="12" />
      <line x1="8" x2="21" y1="18" y2="18" />
      <line x1="3" x2="3.01" y1="6" y2="6" />
      <line x1="3" x2="3.01" y1="12" y2="12" />
      <line x1="3" x2="3.01" y1="18" y2="18" />
    </svg>
  )
}


function RefreshCwIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
      <path d="M8 16H3v5" />
    </svg>
  )
}


function ViewIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z" />
      <path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
      <path d="M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2" />
      <path d="M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2" />
    </svg>
  )
}