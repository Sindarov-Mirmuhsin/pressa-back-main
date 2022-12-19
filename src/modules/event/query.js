
const GETEVENTS = `select * from event`
const GETEVENTSBYID = `select * from event where event_id = $1`

const POSTEVENTS = `
insert into event(body,description,event_link,event_type,event_date,event_time,user_role,user_name,user_proff,company_name,phone_number,phone_second,category_id,sub_category_id,event_img) values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15) returning *
`

const PUTEVENTS = `
with old_event as (
    select
    body,description,
    event_link,event_type,
    event_date,event_time,user_role,
    user_name,user_proff,company_name,
    phone_number,phone_second,
    category_id,sub_category_id
    from event
    where event_id = $1    
) update event as e 
    set
    body = 
        case 
            when length($2) > 1 then $2
             else o.body
        end,
    description = 
        case 
            when length($3) > 1 then $3
            else o.description
        end,
    event_link = 
        case 
            when length($4) > 0 then $4
            else o.event_link
        end,
    event_type = 
        case 
            when length($5) > 0 then $5
            else o.event_type
        end
    event_date = 
        case 
            when length($6) > 0 then $6
            else o.event_date
        end  
    event_time = 
        case 
            when length($7) > 0 then $7
            else o.event_time
        end 
    user_role = 
        case 
            when length($8) > 0 then $8
            else o.user_role
        end    
    user_name = 
        case 
            when length($9) > 0 then $9
            else o.user_name
        end  
    user_proff = 
        case 
            when length($10) > 0 then $10
            else o.user_proff
        end 
    company_name = 
        case 
            when length($11) > 0 then $1
            else o.company_name
        end  
    phone_number = 
        case 
            when length($12) > 0 then $12
            else o.phone_number
        end  
    phone_second = 
        case 
            when length($13) > 0 then $13
            else o.phone_second
        end  
    category_id = 
        case 
            when $14 > 0 then $14
            else o.category_id
        end   
    sub_category_id = 
        case 
            when $15 > 0 then $15
            else o.sub_category_id
        end                               
  from old_event as o   
  where e.event_id = $1 and e.status = 'active' or e.status='new'
  returning e.*                 
`;

const DELETEEVENTS = `
update event
set status = 'deleted'
where event_id = $1 and status = 'new' or status='active'
returning *  
`

const ACTIVEEVENT = `
update event
set status = 'active'
where event_id = $1 and status = 'new'
returning *  
`




export {
GETEVENTS,
POSTEVENTS,
PUTEVENTS,
DELETEEVENTS,
ACTIVEEVENT,
GETEVENTSBYID
};