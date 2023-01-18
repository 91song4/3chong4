-- 1회차
-- 문제 1
-- 연봉이 최대 5,000만원을 넘지 않는 
-- 부서 ID가 17인 사원들 및
--  부서 ID가 5번인 모든 사원들 및 커미션을 받는 사원들의 목록을 찾고 싶습니다.
select
  department_id
from
  employees
where
  department_id = 17
  or department_id = 5;

-- 문제 2
-- track이 "Node.js"이거나 "React"인 학생들 중 성이 "김"씨거나 끝의 이름이 "호"로 끝나는 
-- 학생들의 명단(student_name)을 알고 싶습니다.
select
  student_name
from
  students
where
  (
    track = "Node.js"
    or track = "React"
  )
  and -- track IN ('Node.js','React') AND
  (
    student_name [처음] = "김"
    or student_name [끝] = "호"
  );

-- student_name LIKE '김%' OR student_name LIKE '%호';
-- 문제 3
-- rank_score가 1000 이하면 'IRON',
-- 1001 ~ 2000 사이면 "BRONZE",
-- 2001 ~ 3000 사이면 "SILVER"
-- 3001 이상이면 "GOD"을 출력하는
-- rank_result라는 이름의 컬럼을 포함하여 name과 같이 결과를 알고 싶습니다.
select
  name,
  rank_result -- CASE WHEN rank_score <= 1000 THEN 'IRON'
  -- WHEN rank_score <= 2000 THEN 'BRONZE'
  -- WHEN rank_score <= 3000 THEN 'SILVER'
  -- ELSE 'GOD' AS rank_result
from
  lol_players
where
  rank_score <= 1000 as rank_result = 'IRON',
  1001 <= rank_score
  and rank_score <= 2000 as rank_result = 'BRONZE',
  2001 <= rank_score
  AND rank_score <= 3000 as rank_result = 'SILVER',
  3001 <= rank_score as rank_result = 'GOD';

-- 문제 4
SELECT
  heavy_user
FROM
  PLACES
WHERE
SELECT
  COUNT(HOST_ID)
FROM
  PLACES
WHERE
  WHEN 1 < COUNT(HOST_ID) AS heavy_user sort(ID)...? ? ?;

-- SELECT
--   ID,
--   NAME,
--   HOST_ID
-- FROM
--   PLACES
-- WHERE
--   HOST_ID IN (
--     SELECT
--       HOST_ID
--     FROM
--       PLACES
--     GROUP BY
--       HOST_ID
--     HAVING
--       COUNT(HOST_ID) > 1
--   )
-- ORDER BY
--   ID;
-- 2회차
SELECT
  b.AUTHOR_ID,
  c.AUTHOR_NAME,
  b.CATEGORY,
  SUM(a.SALES * b.PRICE) as SALES
FROM
  BOOK_SALES a
  INNER JOIN BOOK b ON a.BOOK_ID = b.BOOK_ID
  INNER JOIN AUTHOR c ON b.AUTHOR_ID = c.AUTHOR_ID
WHERE
  a.SALES_DATE a.SALES_DATE < '2022-02-01'
GROUP BY
  b.AUTHOR_ID,
  b.CATEGORY
ORDER BY
  b.AUTHOR_ID,
  b.CATEGORY DESC