/* --- STATE --- */
export interface ProfilePageState {
    loading:boolean,
    data: {
        id:number,
        email:string,
        firstName:string,
        lastName:string,
        offRequests:[
            {
                [key: string]: any;
            }
        ],
        teams:[
            {
                [key: string]: any;
            }
        ],
        dateEntrance:string,
        tagItems:[
            {
                [key: string]: any;
            }
        ],
        daysEarned:number,
        daysTaken:number,
        daysLeft:number,
        jobTitle:string
    }
}
