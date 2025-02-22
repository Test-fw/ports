# You can define the following to enable further compile time
# customizations:
# MAILDROP_SUID=<username>,
# MAILDROP_SGID=<groupname>     Maildrop will be installed with suid
#				permissions for MAILDROP_SUID, and sgid
#				permissions for MAILDROP_SGID.
#				NOTE: must be a valid username/groupname
#				at installation time, numeric uids/gids
#				and non existing users will cause the
#				installed package to miss files.
# MAILDROP_TRUSTED_USERS=<user> Specify users allowed to use the -d option
# MAILDROP_LOG_COLUMNS	lenght of 'File:' line in log - 8; default: 72
# MAILDROP_MBOX_DIR=<dir>	Specify DEFAULT mailbox location

PORTNAME=	maildrop
PORTVERSION=	3.1.6
PORTREVISION=	1
CATEGORIES=	mail
MASTER_SITES=	SF/courier/${PORTNAME}/${PORTVERSION}

MAINTAINER=	madpilot@FreeBSD.org
COMMENT=	Mail delivery agent (MDA) with filtering abilities
WWW=		https://www.courier-mta.org/maildrop/

LICENSE=	GPLv3

LIB_DEPENDS=	libpcre.so:devel/pcre \
		libcourier-unicode.so:devel/courier-unicode \
		libidn2.so:dns/libidn2 \
		libpcre2-8.so:devel/pcre2

USES=		compiler:c++11-lang cpe iconv localbase:ldflags perl5 pkgconfig \
		tar:bzip2
USE_PERL5=	build
GNU_CONFIGURE=	yes
CONFIGURE_ARGS=	--enable-syslog=1 \
		--enable-use-flock=1 \
		--with-etcdir="${PREFIX}/etc" \
		--enable-maildirquota
INSTALL_TARGET=	install-strip

CONFLICTS=	courier-0.65* libunicode

MAILDROP_LOG_COLUMNS?=	72	# lenght of 'File:' line in log

FIXDOCPATH=	libs/maildir/deliverquota.8.in libs/maildir/maildir.5 \
		libs/maildir/maildiracl.1.in libs/maildir/maildirkw.1 \
		libs/maildir/maildirmake.1.in libs/maildir/maildirquota.7 \

DOCS=	AUTHORS INSTALL INSTALL.html README README.html README.postfix \
	UPGRADE UPGRADE.html maildroptips.txt maildir/README.*

.if exists(${.CURDIR}/../../security/courier-authlib/Makefile.opt)
.include "${.CURDIR}/../../security/courier-authlib/Makefile.opt"
OPTIONS_MULTI_AUTHLIB:=	${OPTIONS_DEFINE:NDOCS}
OPTIONS_DEFINE=		AUTHLIB
OPTIONS_MULTI=		AUTHLIB
AUTHLIB_DESC=		Courier Auth Library support
.endif

OPTIONS_DEFINE+=	DOCS DOVECOTAUTH GDBM INOTIFY MAILWRAPPER

DOVECOTAUTH_DESC=	Dovecot Authentication support
INOTIFY_DESC=		Inotify support for IDLE command
MAILWRAPPER_DESC=	Let configure guess which sendmail binary to use

OPTIONS_SUB=		yes
DOVECOTAUTH_CONFIGURE_ENABLE=	dovecotauth
GDBM_CONFIGURE_OFF=	--with-db=db
GDBM_CONFIGURE_ON=	--with-db=gdbm
GDBM_LIB_DEPENDS=	libgdbm.so:databases/gdbm
INOTIFY_LIB_DEPENDS=	libinotify.so:devel/libinotify
MAILWRAPPER_CONFIGURE_OFF=	--enable-sendmail=/usr/sbin/sendmail

.include <bsd.port.options.mk>

.if defined(MAILDROP_SUID) && defined(MAILDROP_SGID)
CONFIGURE_ARGS+=	--enable-maildrop-uid="${MAILDROP_SUID}" --enable-maildrop-gid="${MAILDROP_SGID}"
PLIST_SUB+=		MMODE='6755' MUID='${MAILDROP_SUID}' MGID='${MAILDROP_SGID}'
.elif defined(MAILDROP_SUID)
CONFIGURE_ARGS+=	--enable-maildrop-uid="${MAILDROP_SUID}"
PLIST_SUB+=		MMODE='4755' MUID='${MAILDROP_SUID}' MGID='mail'
.elif defined(MAILDROP_SGID)
CONFIGURE_ARGS+=	--enable-maildrop-gid="${MAILDROP_SGID}"
PLIST_SUB+=		MMODE='2755' MGID='${MAILDROP_SGID}' MUID='root'
.else
PLIST_SUB+=		MMODE='' MUID='root' MGID='mail'
.endif

.if defined(MAILDROP_MBOX_DIR)
CONFIGURE_ARGS+=	--with-default-maildrop='${MAILDROP_MBOX_DIR}'
.endif

.if defined(MAILDROP_TRUSTED_USERS)
CONFIGURE_ARGS+=	--enable-trusted-users="${MAILDROP_TRUSTED_USERS}"
.endif

post-patch:
	@${REINPLACE_CMD} -e "s/l= 72 - szbuf.Length();/l= ${MAILDROP_LOG_COLUMNS} - szbuf.Length();/" \
		${WRKSRC}/libs/maildrop/log.C
.for f in ${FIXDOCPATH}
	@${REINPLACE_CMD} -e "s|\\\%\[set \$$man\.base\.url\.for\.relative\.links\]|${DOCSDIR}|" \
		-e "s/\(maildirmake.html\)/maildrop-\1/" \
		-e "s/\(deliverquota.html\)/maildrop-\1/" ${WRKSRC}/${f}
.endfor
.if ${PORT_OPTIONS:MAUTHLIB}
	@${REINPLACE_CMD} -e 's|@LIBS@|@LIBS@ -L${LOCALBASE}/lib/courier-authlib|' \
		${WRKSRC}/libs/maildrop/Makefile.in
.if exists(${.CURDIR}/../../security/courier-authlib/Makefile.dep)
.include "${.CURDIR}/../../security/courier-authlib/Makefile.dep"
.endif
BUILD_DEPENDS+=	courierauthconfig:security/courier-authlib-base
RUN_DEPENDS+=	courierauthconfig:security/courier-authlib-base
CONFIGURE_ARGS+=	--enable-authlib
.else
CONFIGURE_ARGS+=	--disable-authlib
.endif

post-patch-INOTIFY-on:
	@${REINPLACE_CMD} -e 's|LIBS = @LIBS@|& ${LOCALBASE}/lib/libinotify.a /usr/lib/libpthread.a|' \
		${WRKSRC}/libs/maildir/Makefile.in

post-configure-INOTIFY-on:
	@${ECHO_CMD} '#define HAVE_INOTIFY_INIT 1' >>${WRKSRC}/libs/maildir/config.h
	@${ECHO_CMD} '#define HAVE_INOTIFY_INIT1 1' >>${WRKSRC}/libs/maildir/config.h

post-install:
.if ${PORT_OPTIONS:MDOVECOTAUTH}
	${INSTALL_DATA} ${WRKSRC}/README.dovecotauth ${STAGEDIR}${DOCSDIR}
.endif
	${INSTALL_DATA} ${WRKSRC}/libs/maildir/quotawarnmsg \
		${STAGEDIR}${PREFIX}/etc/quotawarnmsg.sample
	cd ${WRKSRC} && ${INSTALL_DATA} ${DOCS:S/maildir\//libs\/&/} ${STAGEDIR}${DOCSDIR}

.include <bsd.port.mk>
