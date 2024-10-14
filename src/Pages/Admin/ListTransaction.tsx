import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
const invoices = [
    {
        No: "INV001",
        Users: "Moh Ryan Khalifatul Huda",
        BuktiTransfer: "BCa.jpg",
        RemainingActive: "26/Hari",
        StatusUser: "Active",
        StatusPayment: "Approve",
        Action: <div className="absolute w-5 h-5 origin-center rotate-45 cursor-pointer hover:bg-red-500 bg-first right-5 top-4"></div>
        ,
    },
]

const ListTransaction = () => {
    return (
        <div className='h-[990px] max-h-screen w-full'>
            <div className="flex p-10">
                <Table className='text-white'>
                    <TableCaption>List User DumbFlix.</TableCaption>
                    <TableHeader>
                        <TableRow className=''>
                            <TableHead className="w-[100px] text-red-500">No</TableHead>
                            <TableHead className='text-red-500'>Users</TableHead>
                            <TableHead className='text-red-500'>Bukti Transfer</TableHead>
                            <TableHead className="text-red-500">Remaining Active</TableHead>
                            <TableHead className="text-red-500">Status User</TableHead>
                            <TableHead className="text-red-500 ">Status Payment</TableHead>
                            <TableHead className="text-right text-red-500">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {invoices.map((invoice, index) => (
                            <TableRow key={index} className={`${index % 2 === 0 ? "bg-gray-600" : "bg-gray-800"}`}>
                                <TableCell className="font-medium">{invoice.No}</TableCell>
                                <TableCell>{invoice.Users}</TableCell>
                                <TableCell>{invoice.BuktiTransfer}</TableCell>
                                <TableCell>{invoice.RemainingActive}</TableCell>
                                <TableCell>{invoice.StatusUser}</TableCell>
                                <TableCell>{invoice.StatusPayment}</TableCell>
                                <TableCell className="relative text-right">{invoice.Action}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter>
                        <TableRow className='bg-black'>
                            <TableCell className='text-red-500' colSpan={6}>Total</TableCell>
                            <TableCell className="text-right text-red-500">$2,500.00</TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </div>
        </div>
    )
}

export default ListTransaction