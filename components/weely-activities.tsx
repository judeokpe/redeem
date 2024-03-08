import { CheckCheckIcon, CheckCircle, CircleIcon, TimerIcon } from "lucide-react";

const WeeklyActivities = () => {
    return ( 
        <div className="px-4 md:px-10 pt-2 text-center "> 
        <div className="">
            <div className="">
                <h2 className="font-bold uppercase text-xl text-yellow-600 bg-black p-1 md:text-3xl ">RCCG Weekly Activities</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 space-y-4 mt-3">
                <div className="bg-black text-white p-4 rounded-tl-lg border border-white space-y-2">
                    
                    
                    <h2 className="uppercase text-2xl  font-bold">Sunday:</h2>
                    <hr/>
                    <div className="space-y-1">
                        <div className="flex items-center space-x-2 font-bold">
                        <CheckCircle />
                        <p>Morning Worship Service</p>
                        </div>
                        <h3>Time: 8:00am </h3>
                        <p className="text-muted-foreground">Join us for a time of praise, worship, and preaching of God's Word.</p>
                        <hr/>
                    </div>
                    <div className="space-y-1">
                        <div className="flex items-center space-x-2 font-bold">
                        <CheckCircle />
                        <p>Sunday Schoolce</p>
                        </div>
                        <h3>Time: 10:00am </h3>
                        <p className="text-muted-foreground">Bible study classes for all ages. Learn and grow together in faith.</p>
                        <hr/>
                    </div>
                    <div className="space-y-1">
                        <div className="flex items-center space-x-2 font-bold">
                        <CheckCircle />
                        <p>Evening Service (Alternating)</p>
                        </div>
                        <h3>Time: 4:00pm </h3>
                        <p className="text-muted-foreground">An additional time of worship, teaching, and fellowship.</p>
                       
                    </div>
                    
                </div>
                <div className="bg-black text-white p-4 rounded-tl-lg border border-white space-y-2">
                    <h2 className="uppercase text-2xl  font-bold">Monday:</h2>
                    <hr/>
                    <div className="space-y-1">
                        <div className="flex items-center space-x-2 font-bold">
                        <CheckCircle />
                        <p>Prayer Meeting</p>
                        </div>
                        <h3>Time: 4:00pm </h3>
                        <p className="text-muted-foreground">Come together to pray for the needs of our church, community, and world.</p>
                        
                    </div>
                    <h2 className="uppercase text-2xl pt-2 font-bold">Tuesday::</h2>
                    <hr/>
                    <div className="space-y-1">
                        <div className="flex items-center space-x-2 font-bold">
                        <CheckCircle />
                        <p>Women's Bible Study</p>
                        </div>
                        <h3>Time: 8:00am </h3>
                        <p className="text-muted-foreground">A time for women to study God's Word, share fellowship, and pray together.</p>
                     
                    </div>
                   
                    
                </div>
               
                <div className="bg-black text-white p-4 rounded-tl-lg border border-white space-y-2">
                    
                    
                    <h2 className="uppercase text-2xl  font-bold">Wedneday:</h2>
                    <hr/>
                    <div className="space-y-1">
                        <div className="flex items-center space-x-2 font-bold">
                        <CheckCircle />
                        <p>Midweek Service</p>
                        </div>
                        <h3>Time: 3:00am </h3>
                        <p className="text-muted-foreground">A midweek gathering for worship, Bible teaching, and prayer.</p>
                        
                    </div>
                    <h2 className="uppercase text-2xl  font-bold">Thurday:</h2>
                    <hr/>
                    <div className="space-y-1">
                        <div className="flex items-center space-x-2 font-bold">
                        <CheckCircle />
                        <p>Youth Group</p>
                        </div>
                        <h3>Time: 8:00am </h3>
                        <p className="text-muted-foreground">A dynamic gathering for teenagers to grow in their relationship with God, engage in discussions, and have fun.
</p>
                     
                    </div>
                   
                   
                    
                    
                </div>
               
                <div className="bg-black text-white p-4 rounded-tl-lg border border-white space-y-2">
                    
                    
                    <h2 className="uppercase text-2xl  font-bold">Friday:</h2>
                    <hr/>
                    <div className="space-y-1">
                        <div className="flex items-center space-x-2 font-bold">
                        <CheckCircle />
                        <p>Men's Fellowship</p>
                        </div>
                        <h3>Time: 8:00am </h3>
                        <p className="text-muted-foreground">A time for men to build relationships, study Scripture, and encourage one another in faith.</p>
                        
                    </div>
                   
                    <h2 className="uppercase text-2xl  font-bold">Saturday:</h2>
                    <hr/>
                    <div className="space-y-1">
                        <div className="flex items-center space-x-2 font-bold">
                        <CheckCircle />
                        <p>Community Outreach</p>
                        </div>
                        <h3>Time: 8:00am </h3>
                        <p className="text-muted-foreground">Join us as we serve our community through various outreach activities, such as feeding the homeless, visiting nursing homes, or organizing community events.</p>
                        
                    </div>
                </div>
                
                
            </div>
        </div>

        </div>
     );
}
 
export default WeeklyActivities;