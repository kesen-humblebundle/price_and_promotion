SELECT general_discounts.discount, publisher_discounts.discount
FROM general_discounts,publisher_discounts
WHERE '2020-09-03' BETWEEN general_discounts.start AND general_discounts.end AND product_id = 294609
or '2020-09-03' between publisher_discounts.start and publisher_discounts.end and product.publisher_id;

//TODO: How to display base_price when there is no discount. IF there is no discount, then should it still look for that date?
SELECT p.base_price, pubd.discount
FROM products as p
INNER JOIN publishers as pub ON p.publisher_id = pub.id
LEFT JOIN publisher_discounts as pubd ON pubd.publisher_id = pub.id
WHERE (p.id = 9000000)
AND ('2020-09-03' BETWEEN pubd.start AND pubd.end)
LIMIT 10;

SELECT COALESCE(p.base_price, pubd.discount)
FROM products as p
INNER JOIN publishers as pub ON p.publisher_id = pub.id
LEFT JOIN publisher_discounts as pubd ON pubd.publisher_id = pub.id
WHERE (p.id = 9000000)
AND ('2020-09-03' BETWEEN pubd.start AND pubd.end)
LIMIT 10;

SELECT p.base_price, gend.discount
FROM products as p
INNER JOIN general_discounts as gend ON gend.product_id = p.id

SELECT p.base_price, subd.discount
FROM products as p
INNER JOIN subscription_discounts as subd ON subd.product_id = p.id