export interface Posting {
    deliveryNumber: number;
    sender: string;
    receiver: string;
    senderPostOffice: string;
    receiverPostOffice: string;
    sendTime: Date;
    deliveryTime: string;
    goodType: string;
    deliveryType: string;
}
