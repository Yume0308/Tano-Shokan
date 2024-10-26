import Link from "next/link";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";

const StaffList = () => {
  return (
    <>
      <Card className="rounded-2xl">
        <CardHeader className="flex flex-col items-stretch space-y-0 p-0 sm:flex-row">
          <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
            <CardTitle className="text-xl font-semibold">Staff List</CardTitle>
            <CardDescription>
              show some staffs in system
            </CardDescription>
          </div>
          <div className="flex">
            <div className="flex flex-1 justify-end items-center px-6 py-5 sm:py-6">
              <Button
                variant={"outline"}
              >
                View All
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last login</TableHead>
                <TableHead>Joining date</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>INV001</TableCell>
                <TableCell>
                  Tuan
                </TableCell>
                <TableCell>
                  <Link href="/">
                    <Badge variant="active">Active</Badge>
                  </Link>
                </TableCell>
                <TableCell>7p ago</TableCell>
                <TableCell>12/12/2021</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Link href="/staffs">
            <span className="text-sm text-red-400 hover:text-red-400/80">Show All</span>
          </Link>
        </CardFooter>
      </Card>
    </>
  )
}

export default StaffList;
