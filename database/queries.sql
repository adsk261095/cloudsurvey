\c studentplus;

/* Get all posts part of a topic 'jam' whose topic_id is 1 */
select * from feed_item where id =(select ft.feed_id from feed_topic ft where ft.topic_id=1) and parent is null;
