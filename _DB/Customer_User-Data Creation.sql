INSERT INTO DynatronCustomer (FirstName, LastName, Email, Status, CreatedDate, UpdatedDate)
VALUES 
('John', 'Doe', 'john.doe@example.com', 1, GETDATE(), GETDATE()),
('Jane', 'Doe', 'jane.doe@example.com', 1, GETDATE(), GETDATE()),
('Jimmy', 'Doe', 'jimmy.doe@example.com', 1, GETDATE(), GETDATE()),
('Jack', 'Doe', 'jack.doe@example.com', 1, GETDATE(), GETDATE()),
('Jill', 'Doe', 'jill.doe@example.com', 1, GETDATE(), GETDATE()),
('Joe', 'Doe', 'joe.doe@example.com', 1, GETDATE(), GETDATE()),
('Jenny', 'Doe', 'jenny.doe@example.com', 1, GETDATE(), GETDATE()),
('Jessica', 'Doe', 'jessica.doe@example.com', 1, GETDATE(), GETDATE()),
('Jeff', 'Doe', 'jeff.doe@example.com', 1, GETDATE(), GETDATE()),
('Julia', 'Doe', 'julia.doe@example.com', 1, GETDATE(), GETDATE()),
('Jordan', 'Doe', 'jordan.doe@example.com', 1, GETDATE(), GETDATE()),
('Jasmine', 'Doe', 'jasmine.doe@example.com', 1, GETDATE(), GETDATE()),
('Jacob', 'Doe', 'jacob.doe@example.com', 1, GETDATE(), GETDATE()),
('Jocelyn', 'Doe', 'jocelyn.doe@example.com', 1, GETDATE(), GETDATE()),
('Jonah', 'Doe', 'jonah.doe@example.com', 1, GETDATE(), GETDATE()),
('Joan', 'Doe', 'joan.doe@example.com', 1, GETDATE(), GETDATE()),
('Jerome', 'Doe', 'jerome.doe@example.com', 1, GETDATE(), GETDATE()),
('Joy', 'Doe', 'joy.doe@example.com', 1, GETDATE(), GETDATE()),
('Javier', 'Doe', 'javier.doe@example.com', 1, GETDATE(), GETDATE()),
('Jada', 'Doe', 'jada.doe@example.com', 1, GETDATE(), GETDATE()),
('Jared', 'Doe', 'jared.doe@example.com', 1, GETDATE(), GETDATE()),
('Jean', 'Doe', 'jean.doe@example.com', 1, GETDATE(), GETDATE()),
('Josie', 'Doe', 'josie.doe@example.com', 1, GETDATE(), GETDATE()),
('Julian', 'Doe', 'julian.doe@example.com', 1, GETDATE(), GETDATE()),
('Janelle', 'Doe', 'janelle.doe@example.com', 1, GETDATE(), GETDATE()),
('Jude', 'Doe', 'jude.doe@example.com', 1, GETDATE(), GETDATE()),
('Joel', 'Doe', 'joel.doe@example.com', 1, GETDATE(), GETDATE()),
('Janet', 'Doe', 'janet.doe@example.com', 1, GETDATE(), GETDATE()),
('Justice', 'Doe', 'justice.doe@example.com', 1, GETDATE(), GETDATE()),
('Jett', 'Doe', 'jett.doe@example.com', 1, GETDATE(), GETDATE());

INSERT INTO DynatronUser (UserName, Pwd, CustomerID)
SELECT 
    Email, 
    CHAR(ASCII('A') + CAST(RAND() * 25 AS INT)) +
    CHAR(ASCII('a') + CAST(RAND() * 25 AS INT)) +
    CHAR(ASCII('0') + CAST(RAND() * 9 AS INT)) +
    CHAR(ASCII('A') + CAST(RAND() * 25 AS INT)) +
    CHAR(ASCII('a') + CAST(RAND() * 25 AS INT)) +
    CHAR(ASCII('0') + CAST(RAND() * 9 AS INT)) +
    CHAR(ASCII('A') + CAST(RAND() * 25 AS INT)) +
    CHAR(ASCII('a') + CAST(RAND() * 25 AS INT)),
	CustomerID
FROM DynatronCustomer

UPDATE c
SET c.UserID = u.UserID
FROM DynatronCustomer c
JOIN DynatronUser u ON c.Email = u.UserName;

SELECT * FROM DynatronCustomer
SELECT * FROM DynatronUser

-- RESET IDENTITIES
--DBCC CHECKIDENT ('[DynatronCustomer]', RESEED, 0)
--GO

--DBCC CHECKIDENT ('[DynatronUser]', RESEED, 0)
--GO