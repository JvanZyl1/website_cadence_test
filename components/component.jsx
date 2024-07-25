/**
 * v0 by Vercel.
 * @see https://v0.dev/t/9iCJ9WaG3DU
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
<<<<<<< HEAD
import Image from 'next/image';
=======
>>>>>>> 7928bd07864df361411b0e36843b7470b096cb72
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-muted/40">
      <header className="flex items-center h-16 px-4 border-b bg-background shrink-0 md:px-6">
        <nav className="hidden gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link href="#" className="flex items-center gap-2 text-lg font-semibold md:text-base" prefetch={false}>
            <Package2Icon className="w-6 h-6" />
            <span className="sr-only">Acme Wholesale</span>
          </Link>
          <Link href="#" className="text-muted-foreground" prefetch={false}>
            Inventory
          </Link>
          <Link href="#" className="text-muted-foreground" prefetch={false}>
            Orders
          </Link>
          <Link href="#" className="font-bold" prefetch={false}>
            Pricing
          </Link>
        </nav>
        <div className="flex items-center w-full gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="flex-1 ml-auto sm:flex-initial">
            <div className="relative">
              <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search inventory..."
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
              />
            </div>
          </form>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-full">
<<<<<<< HEAD
                <Image
  src="/images/Jamie_Vary_2018.jpg"  // Adjust the path according to where you saved your image
  width={500}               // Specify the width
  height={300}              // Specify the height
  alt="Description of Image" // Provide a descriptive alt text
  className="rounded-full"   // Any additional classes
/>
=======
                <img src="/placeholder.svg" width="32" height="32" className="rounded-full" alt="Avatar" />
>>>>>>> 7928bd07864df361411b0e36843b7470b096cb72
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Price Slashing Recommendations</CardTitle>
            <LightbulbIcon className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Item</TableHead>
                  <TableHead>Original Price</TableHead>
                  <TableHead>Profit Margin</TableHead>
                  <TableHead>Recommendation</TableHead>
                  <TableHead>Profit Loss</TableHead>
                  <TableHead>Expiry</TableHead>
                  <TableHead>Approve</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Apples</TableCell>
                  <TableCell>$2.99</TableCell>
                  <TableCell>35%</TableCell>
                  <TableCell>Slash prices by 20%</TableCell>
                  <TableCell>$0.60</TableCell>
                  <TableCell>2023-06-30</TableCell>
                  <TableCell>
                    <Button variant="outline" size="icon">
                      <CheckIcon className="h-4 w-4" />
                      <span className="sr-only">Approve</span>
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Carrots</TableCell>
                  <TableCell>$1.79</TableCell>
                  <TableCell>28%</TableCell>
                  <TableCell>Slash prices by 15%</TableCell>
                  <TableCell>$0.27</TableCell>
                  <TableCell>2023-07-15</TableCell>
                  <TableCell>
                    <Button variant="outline" size="icon">
                      <CheckIcon className="h-4 w-4" />
                      <span className="sr-only">Approve</span>
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Tomatoes</TableCell>
                  <TableCell>$3.49</TableCell>
                  <TableCell>22%</TableCell>
                  <TableCell>Slash prices by 10%</TableCell>
                  <TableCell>$0.35</TableCell>
                  <TableCell>2023-08-01</TableCell>
                  <TableCell>
                    <Button variant="outline" size="icon">
                      <CheckIcon className="h-4 w-4" />
                      <span className="sr-only">Approve</span>
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Broccoli</TableCell>
                  <TableCell>$2.99</TableCell>
                  <TableCell>40%</TableCell>
                  <TableCell>2 for the price of 1</TableCell>
                  <TableCell>$0.75</TableCell>
                  <TableCell>2023-07-31</TableCell>
                  <TableCell>
                    <Button variant="outline" size="icon">
                      <CheckIcon className="h-4 w-4" />
                      <span className="sr-only">Approve</span>
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Onions</TableCell>
                  <TableCell>$1.99</TableCell>
                  <TableCell>32%</TableCell>
                  <TableCell>Slash prices by 18%</TableCell>
                  <TableCell>$0.36</TableCell>
                  <TableCell>2023-09-15</TableCell>
                  <TableCell>
                    <Button variant="outline" size="icon">
                      <CheckIcon className="h-4 w-4" />
                      <span className="sr-only">Approve</span>
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

function CheckIcon(props) {
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
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}


function LightbulbIcon(props) {
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
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  )
}


function Package2Icon(props) {
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
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  )
}


function SearchIcon(props) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function XIcon(props) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}