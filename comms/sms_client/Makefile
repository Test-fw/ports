PORTNAME=	sms_client
PORTVERSION=	3.0.2
PORTREVISION=	3
CATEGORIES=	comms
MASTER_SITES=	https://BSDforge.com/projects/source/comms/sms_client/

MAINTAINER=	ports@FreeBSD.org
COMMENT=	Simple UNIX SMS client to send messages to phones or pagers
WWW=		https://bsdforge.com/projects/comms/sms_client/

LICENSE=	LGPL20+

DEPRECATED=	Abandonware, dead upstream and relies on legacy hardware and or networks that are obsolete
EXPIRATION_DATE=2024-02-29

USES=		tar:xz
HAS_CONFIGURE=	yes
SPOOL=		${STAGEDIR}${PREFIX}/var/spool/sms

MAKE_JOBS_UNSAFE=	yes

post-configure:
	@${SED} -e 's@gcc@${CC}@g' -e 's@-Wall@${CFLAGS} -Wall@g' \
		${FILESDIR}/Makefile.config > ${WRKSRC}/Makefile.config

post-patch:
	@${MV} ${WRKSRC}/sms/services/vodafone_autralia \
		${WRKSRC}/sms/services/vodafone_australia
	@${RM} ${WRKSRC}/sms/services/att_web.orig

do-install:
	${INSTALL_PROGRAM} ${WRKSRC}/bin/sms_client \
		${WRKSRC}/bin/sms_address ${STAGEDIR}${PREFIX}/bin
	cd ${WRKSRC}; ${COPYTREE_SHARE} sms/scripts ${STAGEDIR}${PREFIX}/etc
	cd ${WRKSRC}; ${COPYTREE_SHARE} sms/services ${STAGEDIR}${PREFIX}/etc
	cd ${WRKSRC}/sms && ${INSTALL_DATA} sms_addressbook \
		sms_config sms_daemons sms_modem sms_services \
		${STAGEDIR}${PREFIX}/etc/sms
	cd ${STAGEDIR}${PREFIX}/etc/sms/services ; ${FIND} -s * -type f \
		-exec mkdir -p ${SPOOL}/errors/{} \; \
		-exec mkdir -p ${SPOOL}/services/{} \; \
		-exec touch ${SPOOL}/errors/{}/.keep \; \
		-exec touch ${SPOOL}/services/{}/.keep \;
	${MKDIR} -p ${SPOOL}/named_pipes ${SPOOL}/locks ${SPOOL}/incoming
	${TOUCH} ${SPOOL}/named_pipes/.keep ${SPOOL}/locks/.keep \
		${SPOOL}/incoming/.keep

.include <bsd.port.mk>
