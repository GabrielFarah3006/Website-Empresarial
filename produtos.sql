USE cardapio;

CREATE TABLE produtos(
id_prod int .  primary key, 
nome varchar(75),
descricao varchar(300),
valor float,
qtdestoque int
) 