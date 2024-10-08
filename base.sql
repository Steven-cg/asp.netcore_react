USE [steven_cirino]
GO
/****** Object:  Table [dbo].[mascota]    Script Date: 19/09/2024 00:25:35 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[mascota](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](50) NULL,
	[edad] [int] NULL,
	[raza] [varchar](50) NULL,
	[especie] [varchar](50) NULL,
	[color] [varchar](50) NULL,
	[estado] [varchar](10) NULL,
	[ip] [varchar](50) NULL,
	[fecha_ingreso] [datetime] NULL,
	[fecha_actualizacion] [datetime] NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[persona]    Script Date: 19/09/2024 00:25:35 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[persona](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](50) NULL,
	[apellido] [varchar](50) NULL,
	[fecha_nacimiento] [datetime] NULL,
	[estado_civil] [varchar](50) NULL,
	[estatura(m)] [int] NULL,
	[estado] [varchar](10) NULL,
	[ip] [varchar](50) NULL,
	[fecha_creacion] [datetime] NULL,
	[fecha_modificacion] [datetime] NULL
) ON [PRIMARY]
GO
