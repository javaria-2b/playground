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
          <div className="w-full mx-auto space-y-4 py-8">
        {/* <h2 className="text-2xl font-bold">Contact Us</h2> */}
              <form className="space-y-4">
        <div className="grid grid-cols-1 gap-4">
          <div className="space-y-1.5">
            <Label htmlFor="keywords">Keywords:</Label>
            <Input id="keywords"/>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="platform">Platform</Label>
            <Select >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select platform" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="twitter">Twitter</SelectItem>
                <SelectItem value="reddit">Reddit</SelectItem>
                <SelectItem value="linkedin">Linkedin</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="result">Number of Results:</Label>
            <Input id="result" />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="location">Location (optional):</Label>
            <Input id="location"/>
          </div>
          
          <div className="space-y-1.5">
            <Label htmlFor="device">Device:</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select platform" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="desktop">Desktop</SelectItem>
                <SelectItem value="mobile">Mobile</SelectItem>
                <SelectItem value="tablet">Tablet</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="language">Language:</Label>
            <Input id="language"/>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="country">Country:</Label>
            <Input id="country"/>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="safesearch">Safe Search:</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="off">Off</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="time range">Time Range:</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any-time">Any Time</SelectItem>
                <SelectItem value="past-hour">Past Hour</SelectItem>
                <SelectItem value="past-day">Past Day</SelectItem>
                <SelectItem value="any-week">Past Week</SelectItem>
                <SelectItem value="past-month">Past Month</SelectItem>
                <SelectItem value="past-year">Past Year</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="sort by">Sort By:</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="relevance">Relevance</SelectItem>
                <SelectItem value="date">Date</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="negative-keywords">Negative Keywords::</Label>
            <Input id="negative keywords"/>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="sort by">Sort By:</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any</SelectItem>
                <SelectItem value="title">Title</SelectItem>
                <SelectItem value="url">URL</SelectItem>
                <SelectItem value="anchor-text">Anchor Text</SelectItem>
              </SelectContent>
            </Select>
          </div>

        </div>
        <Button type="submit" className="w-full">
          Search
        </Button>
      </form>
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