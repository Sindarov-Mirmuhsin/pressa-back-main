insert into admins (username, password) values ('islom', crypt('12345', gen_salt('bf')));

insert into categories(category_name) values ('IT'),('Dizayn'),('Bizness'),('Ta`lim');

insert into sub_categories(category_id,sub_category_name) values 
(1,'Web dasturlash'),(1,'Mobile dasturlash'),(1,'Desktop dasturlash'),
(2,'Grafik dizayn'),(2,'UI/UX dizayn'),(3,'Menejment'),(3,'Kredit va audit'),
(4,'Matematika'),(4,'Fizika');

insert into event(body,description,event_img,event_link,event_type,event_date,event_time,user_role,user_name,user_proff,company_name,phone_number,phone_second,category_id,sub_category_id) values
('Najot Ta''lim jamoasi o''z o''quvchilari uchun manfaatli bo''lgan musobaqalarni tashkil etishda davom etadi. Biz bu gal markazimizdagi uch soha vakillari, ya''ni UX/UI dizayner, frontend va backend dasturchilarni "bir dasturxon atrofida" to''plashga qaror qildik.
','Alisher Isaevdan biznes va IT bo''yicha master klass','https://picsum.photo/400','sdfghj@com','online','17/01/2022','13:00','yuridik shaxs','Alisher Isaev','Tadbirkor','RoboKidz','+998902345677','+998970987890',3,7),
('Najot Ta''lim jamoasi o''z o''quvchilari uchun manfaatli bo''lgan musobaqalarni tashkil etishda davom etadi. Biz bu gal markazimizdagi uch soha vakillari, ya''ni UX/UI dizayner, frontend va backend dasturchilarni "bir dasturxon atrofida" to''plashga qaror qildik.
','Saidbek Arislonov','https://picsum.photo/400','sdfghjded@com','online','15/01/2022','15:00','yuridik shaxs','Saidbek Arislonov','Web dasturchi','Mastercard','+998902345677','+998970987890',1,1);