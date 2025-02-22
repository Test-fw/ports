PORTNAME=	appjail
DISTVERSION=	3.2.0.20240124
PORTEPOCH=	1
CATEGORIES=	sysutils
PKGNAMESUFFIX=	-devel

MAINTAINER=	acm@FreeBSD.org
COMMENT=	Simple and easy-to-use tool for creating portable jails (devel)
WWW=		https://github.com/DtxdF/AppJail

LICENSE=	BSD3CLAUSE
LICENSE_FILE=	${WRKSRC}/LICENSE

CONFLICTS=	appjail

USE_GITHUB=	yes
GH_ACCOUNT=	DtxdF
GH_PROJECT=	AppJail
GH_TAGNAME=	977025de0bfeeaf4a330e5932737e73b2865d6b8

MAKE_ARGS=	APPJAIL_VERSION=${DISTVERSION}+${GH_TAGNAME}
ALL_TARGET=	utils-strip


SUB_FILES=	pkg-message

PORTDOCS=	README.md

OPTIONS_DEFINE=			DEBOOTSTRAP DOAS DOCS GIT

DEBOOTSTRAP_DESC=		Support for Debian and Ubuntu jails
DOAS_DESC=			Add support for unprivileged users

DEBOOTSTRAP_RUN_DEPENDS=	debootstrap>0:sysutils/debootstrap
DOAS_RUN_DEPENDS=		doas>0:security/doas
GIT_RUN_DEPENDS=		git>0:devel/git

do-install-DOCS-on:
	@${MKDIR} ${STAGEDIR}/${DOCSDIR}
	${INSTALL_DATA} ${WRKSRC}/README.md ${STAGEDIR}/${DOCSDIR}

post-install:
	${MKDIR} ${STAGEDIR}/${ETCDIR}
	${INSTALL_DATA} ${WRKSRC}/share/examples/appjail/appjail.conf ${STAGEDIR}/${ETCDIR}/appjail.conf.sample

.include <bsd.port.mk>
