import {QRCodeSVG} from 'qrcode.react';

export default function ReceiptQrCode(props:any){
    const { value } = props;
    return(
        <div>
            <QRCodeSVG value="https://reactjs.org/" />,
        </div>
    )
}