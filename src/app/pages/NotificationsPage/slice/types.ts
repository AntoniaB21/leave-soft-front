/* --- STATE --- */
export interface NotificationsPageState {
    loading:boolean,
    data:[
        // {
        //     id:number,
        //     message:string,
        //     createdAt:string
        // }
        {
            [key: string]: any;
        }
    ],
    message:string
}
