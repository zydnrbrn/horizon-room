PGDMP         $                |         
   db_horizon %   14.10 (Ubuntu 14.10-0ubuntu0.22.04.1) %   14.10 (Ubuntu 14.10-0ubuntu0.22.04.1)     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16460 
   db_horizon    DATABASE     _   CREATE DATABASE db_horizon WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.UTF-8';
    DROP DATABASE db_horizon;
                postgres    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
                postgres    false            �           0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                   postgres    false    3            �            1259    16462    SequelizeMeta    TABLE     R   CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);
 #   DROP TABLE public."SequelizeMeta";
       public         heap    postgres    false    3            �            1259    16486    clients    TABLE     "  CREATE TABLE public.clients (
    id character varying NOT NULL,
    name character varying(255),
    email character varying(255),
    phone character varying(255),
    credit integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.clients;
       public         heap    postgres    false    3            �            1259    16480 
   roomUsages    TABLE     ~  CREATE TABLE public."roomUsages" (
    id character varying,
    "clientId" character varying,
    "roomId" character varying,
    "startTime" timestamp with time zone,
    "endTime" timestamp with time zone,
    "bookingDate" timestamp with time zone,
    "quotaUsed" integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
     DROP TABLE public."roomUsages";
       public         heap    postgres    false    3            �            1259    16483    rooms    TABLE     �   CREATE TABLE public.rooms (
    id character varying NOT NULL,
    "roomName" character varying(255),
    "costPerHour" integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.rooms;
       public         heap    postgres    false    3            �            1259    16477    sessions    TABLE     @  CREATE TABLE public.sessions (
    id character varying NOT NULL,
    "userId" character varying,
    token character varying(255),
    "startedAt" timestamp with time zone,
    "expiredAt" timestamp with time zone,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.sessions;
       public         heap    postgres    false    3            �            1259    16472    users    TABLE     A  CREATE TABLE public.users (
    id character varying NOT NULL,
    name character varying(255),
    email character varying(255),
    password character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    phone character varying,
    credits integer
);
    DROP TABLE public.users;
       public         heap    postgres    false    3            �          0    16462    SequelizeMeta 
   TABLE DATA           /   COPY public."SequelizeMeta" (name) FROM stdin;
    public          postgres    false    209   `       �          0    16486    clients 
   TABLE DATA           [   COPY public.clients (id, name, email, phone, credit, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    214   �       �          0    16480 
   roomUsages 
   TABLE DATA           �   COPY public."roomUsages" (id, "clientId", "roomId", "startTime", "endTime", "bookingDate", "quotaUsed", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    212   <       �          0    16483    rooms 
   TABLE DATA           X   COPY public.rooms (id, "roomName", "costPerHour", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    213   �       �          0    16477    sessions 
   TABLE DATA           k   COPY public.sessions (id, "userId", token, "startedAt", "expiredAt", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    211   �       �          0    16472    users 
   TABLE DATA           d   COPY public.users (id, name, email, password, "createdAt", "updatedAt", phone, credits) FROM stdin;
    public          postgres    false    210                     2606    16466     SequelizeMeta SequelizeMeta_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);
 N   ALTER TABLE ONLY public."SequelizeMeta" DROP CONSTRAINT "SequelizeMeta_pkey";
       public            postgres    false    209                       2606    16506    clients clients_pk 
   CONSTRAINT     P   ALTER TABLE ONLY public.clients
    ADD CONSTRAINT clients_pk PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.clients DROP CONSTRAINT clients_pk;
       public            postgres    false    214                       2606    16551    sessions sessions_pk 
   CONSTRAINT     R   ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pk PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.sessions DROP CONSTRAINT sessions_pk;
       public            postgres    false    211                       2606    16498    users users_pk 
   CONSTRAINT     L   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pk PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pk;
       public            postgres    false    210            �   ^   x�]�A
� ����ES�K�!�Rp��E�����=B�Hd�OV�ʡ����>hTB��
���eָ.j)�;v�̂��L�Ѩ�L��w�i x ��/�      �   ^   x�3�L��L�+)V��LI��,-N-*3�s3s���s9�͌��ML��-,88��Lt�t���L-�L���,���Hq��qqq =v�      �   �   x���1�0���%۲��ŉ��?���Y����6U[w�7��v�L
���s�3`1�����Җ�<8��8W��l�o���5U���_�
,݆OP�2���i<��h�8r1��
�A�����đ;rl%��_)��B���'
�-���O9      �   �   x���1�0����+�K��咦����%CA�1��X�d2���Z��;BF��g�H{���Nt��Ϥ�L�v�J�Lh��Ĕ	i&�a��p\�G(r�G��,n/�N��4B��p1��e� p���}�z��e}?��*R��A)���V      �   y   x���=�0й9;r��q�ga�eC���L��!I��\H�Z�H^]���nXf7�xwrp'�r���0�R��q)�y�������y�W�߾D	B��tS]��
�Yl�w��B�2u.      �   �   x�Eɻ
�0 �9�
�n�����t���(���K��/��U��p��X)ZK-��J#�Z���h�����վ;�~^��t���wGV����9�u�l�m�t~���;�,�G�O~~<��U�/d��n�~��	A@I)�b&u&����� 2�d��o�5��(� dJ��6,��7;�4�     