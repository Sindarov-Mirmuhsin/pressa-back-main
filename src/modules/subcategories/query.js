

const GETSUBCATEGORY = `
    select
    s.*
    from sub_categories as s
    where s.status = 'active' and case when $1 > 0 then s.sub_category_id = $1 else true end
`;

const POSTSUBCATEGORY = `
    insert into sub_categories(sub_category_name,category_id) values ($1,$2) returning *
`

const PUTSUBCATEGORY = `
    update sub_categories 
        set sub_category_name = $1
    where sub_category_id = $2 and status = 'active'
    returning *    
`

const DELETESUBCATEGORY = `
    update sub_categories 
        set status = 'deleted'
    where sub_category_id = $1 and status = 'active'
    returning * 
`;



export { GETSUBCATEGORY, POSTSUBCATEGORY, PUTSUBCATEGORY, DELETESUBCATEGORY };