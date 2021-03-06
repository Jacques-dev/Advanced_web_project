PGDMP         
                z           fang-s-noodles    14.3    14.3     
           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    16440    fang-s-noodles    DATABASE     l   CREATE DATABASE "fang-s-noodles" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'French_France.1252';
     DROP DATABASE "fang-s-noodles";
                postgres    false            ?            1259    16441    admin    TABLE     ~   CREATE TABLE public.admin (
    id integer NOT NULL,
    email character varying(100),
    password character varying(100)
);
    DROP TABLE public.admin;
       public         heap    postgres    false            ?            1259    16444    admin_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.admin_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.admin_id_seq;
       public          postgres    false    209                       0    0    admin_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.admin_id_seq OWNED BY public.admin.id;
          public          postgres    false    210            ?            1259    16445    reservation    TABLE     ?   CREATE TABLE public.reservation (
    id integer NOT NULL,
    date date,
    heure character varying(20),
    personnes integer,
    client integer
);
    DROP TABLE public.reservation;
       public         heap    postgres    false            ?            1259    16448    reservation_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.reservation_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.reservation_id_seq;
       public          postgres    false    211                       0    0    reservation_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.reservation_id_seq OWNED BY public.reservation.id;
          public          postgres    false    212            ?            1259    16462    command    TABLE     ?   CREATE TABLE public.command (
    id integer DEFAULT nextval('public.reservation_id_seq'::regclass) NOT NULL,
    "time" timestamp without time zone,
    price integer,
    adresse text,
    client integer
);
    DROP TABLE public.command;
       public         heap    postgres    false    212            ?            1259    16449    users    TABLE     ?   CREATE TABLE public.users (
    id integer NOT NULL,
    email character varying(100),
    password character varying(100),
    nom character varying(100),
    prenom character varying(100),
    telephone character(10)
);
    DROP TABLE public.users;
       public         heap    postgres    false            ?            1259    16452    users_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    213                       0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    214            j           2604    16453    admin id    DEFAULT     d   ALTER TABLE ONLY public.admin ALTER COLUMN id SET DEFAULT nextval('public.admin_id_seq'::regclass);
 7   ALTER TABLE public.admin ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    210    209            k           2604    16454    reservation id    DEFAULT     p   ALTER TABLE ONLY public.reservation ALTER COLUMN id SET DEFAULT nextval('public.reservation_id_seq'::regclass);
 =   ALTER TABLE public.reservation ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    212    211            l           2604    16455    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    214    213                      0    16441    admin 
   TABLE DATA           4   COPY public.admin (id, email, password) FROM stdin;
    public          postgres    false    209   ?                 0    16462    command 
   TABLE DATA           E   COPY public.command (id, "time", price, adresse, client) FROM stdin;
    public          postgres    false    215   :                 0    16445    reservation 
   TABLE DATA           I   COPY public.reservation (id, date, heure, personnes, client) FROM stdin;
    public          postgres    false    211   ?                 0    16449    users 
   TABLE DATA           L   COPY public.users (id, email, password, nom, prenom, telephone) FROM stdin;
    public          postgres    false    213   ?                  0    0    admin_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.admin_id_seq', 1, false);
          public          postgres    false    210                       0    0    reservation_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.reservation_id_seq', 5, true);
          public          postgres    false    212                       0    0    users_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.users_id_seq', 6, true);
          public          postgres    false    214            o           2606    16457    admin admin_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.admin
    ADD CONSTRAINT admin_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.admin DROP CONSTRAINT admin_pkey;
       public            postgres    false    209            u           2606    16466    command command_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.command
    ADD CONSTRAINT command_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.command DROP CONSTRAINT command_pkey;
       public            postgres    false    215            q           2606    16459    reservation reservation_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.reservation
    ADD CONSTRAINT reservation_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.reservation DROP CONSTRAINT reservation_pkey;
       public            postgres    false    211            s           2606    16461    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    213               m   x?3?LL?????JL.,M-?-I???L-?MM+J͌7202?T1JR14P	??2?0(pt.M?tN,47-+q3J???,?*p?rώ*/?7s	?J??(	2q.?Ȏr?????? ?H?         f   x?eʻ?0?X?????>?Br???f?Bj?*6IO?S?Ք?E?{????:?4g	?9??wǕlL?pvt????W??!?3b??;?\J96$?            x?????? ? ?         q   x?3??JL.,M-?+I???L-rHM+J???K-?T1JR14P?wt?t???+?I15+??35v?H(??????0q?-4)L?0v0w?O3/N????1?? ?b???? Z#?     