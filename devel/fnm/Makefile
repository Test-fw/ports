PORTNAME=	fnm
DISTVERSIONPREFIX=	v
DISTVERSION=	1.35.1
PORTREVISION=	4
CATEGORIES=	devel

MAINTAINER=	yuri@FreeBSD.org
COMMENT=	Fast and simple Node.js version manager, built in Rust
WWW=		https://github.com/Schniz/fnm

LICENSE=	GPLv3
LICENSE_FILE=	${WRKSRC}/LICENSE

BROKEN_powerpc64le=	compilation failure: called `Option::unwrap()` on a `None` value in ring-0.16.20/build.rs: # see https://github.com/Schniz/fnm/issues/1090

BUILD_DEPENDS=	zstd>0:archivers/zstd # statically linked library

USES=		cargo

USE_GITHUB=	yes
GH_ACCOUNT=	Schniz

CARGO_CRATES=	addr2line-0.19.0 \
		adler-1.0.2 \
		aes-0.8.3 \
		aho-corasick-1.0.2 \
		alloc-no-stdlib-2.0.4 \
		alloc-stdlib-0.2.2 \
		android-tzdata-0.1.1 \
		android_system_properties-0.1.5 \
		anstream-0.3.2 \
		anstyle-1.0.1 \
		anstyle-parse-0.2.1 \
		anstyle-query-1.0.0 \
		anstyle-wincon-1.0.1 \
		anyhow-1.0.71 \
		async-compression-0.4.0 \
		autocfg-1.1.0 \
		backtrace-0.3.67 \
		base64-0.21.2 \
		base64ct-1.6.0 \
		bitflags-1.3.2 \
		block-buffer-0.10.4 \
		brotli-3.3.4 \
		brotli-decompressor-2.3.4 \
		bumpalo-3.13.0 \
		bytecount-0.6.3 \
		byteorder-1.4.3 \
		bytes-1.4.0 \
		bzip2-0.4.4 \
		bzip2-sys-0.1.11+1.0.8 \
		cc-1.0.79 \
		cfg-if-1.0.0 \
		chrono-0.4.26 \
		cipher-0.4.4 \
		clap-4.3.10 \
		clap_builder-4.3.10 \
		clap_complete-4.3.1 \
		clap_derive-4.3.2 \
		clap_lex-0.5.0 \
		colorchoice-1.0.0 \
		colored-2.0.4 \
		constant_time_eq-0.1.5 \
		core-foundation-0.9.3 \
		core-foundation-sys-0.8.4 \
		cpufeatures-0.2.8 \
		crc32fast-1.3.2 \
		crossbeam-channel-0.5.8 \
		crossbeam-deque-0.8.3 \
		crossbeam-epoch-0.9.15 \
		crossbeam-utils-0.8.16 \
		crypto-common-0.1.6 \
		csv-1.2.2 \
		csv-core-0.1.10 \
		diff-0.1.13 \
		digest-0.10.7 \
		dirs-5.0.1 \
		dirs-sys-0.4.1 \
		duct-0.13.6 \
		either-1.8.1 \
		embed-resource-1.8.0 \
		encoding_rs-0.8.32 \
		encoding_rs_io-0.1.7 \
		env_logger-0.10.0 \
		errno-0.3.1 \
		errno-dragonfly-0.1.2 \
		fastrand-1.9.0 \
		filetime-0.2.21 \
		flate2-1.0.26 \
		fnv-1.0.7 \
		form_urlencoded-1.2.0 \
		futures-channel-0.3.28 \
		futures-core-0.3.28 \
		futures-io-0.3.28 \
		futures-sink-0.3.28 \
		futures-task-0.3.28 \
		futures-util-0.3.28 \
		generic-array-0.14.7 \
		getrandom-0.2.10 \
		gimli-0.27.3 \
		h2-0.3.20 \
		hashbrown-0.12.3 \
		heck-0.4.1 \
		hermit-abi-0.3.1 \
		hmac-0.12.1 \
		http-0.2.9 \
		http-body-0.4.5 \
		httparse-1.8.0 \
		httpdate-1.0.2 \
		humantime-2.1.0 \
		hyper-0.14.27 \
		hyper-rustls-0.24.0 \
		iana-time-zone-0.1.57 \
		iana-time-zone-haiku-0.1.2 \
		idna-0.4.0 \
		indexmap-1.9.3 \
		indoc-2.0.2 \
		inout-0.1.3 \
		instant-0.1.12 \
		io-lifetimes-1.0.11 \
		ipnet-2.8.0 \
		is-terminal-0.4.7 \
		itoa-1.0.6 \
		jobserver-0.1.26 \
		js-sys-0.3.64 \
		junction-1.0.0 \
		lazy_static-1.4.0 \
		libc-0.2.147 \
		linux-raw-sys-0.3.8 \
		log-0.4.19 \
		lzma-sys-0.1.20 \
		memchr-2.5.0 \
		memoffset-0.9.0 \
		miette-5.9.0 \
		miette-derive-5.9.0 \
		mime-0.3.17 \
		minimal-lexical-0.2.1 \
		miniz_oxide-0.6.2 \
		miniz_oxide-0.7.1 \
		mio-0.8.8 \
		node-semver-2.1.0 \
		nom-7.1.3 \
		ntapi-0.4.1 \
		num-traits-0.2.15 \
		num_cpus-1.16.0 \
		object-0.30.4 \
		once_cell-1.18.0 \
		openssl-probe-0.1.5 \
		option-ext-0.2.0 \
		os_pipe-1.1.4 \
		password-hash-0.4.2 \
		pbkdf2-0.11.0 \
		percent-encoding-2.3.0 \
		pin-project-lite-0.2.9 \
		pin-utils-0.1.0 \
		pkg-config-0.3.27 \
		pretty_assertions-1.4.0 \
		proc-macro2-1.0.63 \
		quote-1.0.29 \
		rand_core-0.6.4 \
		rayon-1.7.0 \
		rayon-core-1.11.0 \
		redox_syscall-0.2.16 \
		redox_syscall-0.3.5 \
		redox_users-0.4.3 \
		regex-1.8.4 \
		regex-syntax-0.7.2 \
		reqwest-0.11.18 \
		ring-0.16.20 \
		rustc-demangle-0.1.23 \
		rustc_version-0.4.0 \
		rustix-0.37.20 \
		rustls-0.21.2 \
		rustls-native-certs-0.6.3 \
		rustls-pemfile-1.0.3 \
		rustls-webpki-0.100.1 \
		ryu-1.0.13 \
		schannel-0.1.21 \
		scopeguard-1.1.0 \
		sct-0.7.0 \
		security-framework-2.9.1 \
		security-framework-sys-2.9.0 \
		semver-1.0.17 \
		serde-1.0.166 \
		serde_derive-1.0.166 \
		serde_json-1.0.100 \
		serde_urlencoded-0.7.1 \
		sha1-0.10.5 \
		sha2-0.10.7 \
		shared_child-1.0.0 \
		slab-0.4.8 \
		socket2-0.4.9 \
		spin-0.5.2 \
		strsim-0.10.0 \
		subtle-2.5.0 \
		syn-1.0.109 \
		syn-2.0.27 \
		sysinfo-0.29.3 \
		tar-0.4.38 \
		tempfile-3.6.0 \
		termcolor-1.2.0 \
		test-log-0.2.12 \
		thiserror-1.0.44 \
		thiserror-impl-1.0.44 \
		time-0.1.45 \
		time-0.3.22 \
		time-core-0.1.1 \
		tinyvec-1.6.0 \
		tinyvec_macros-0.1.1 \
		tokio-1.29.0 \
		tokio-rustls-0.24.1 \
		tokio-util-0.7.8 \
		toml-0.5.11 \
		tower-service-0.3.2 \
		tracing-0.1.37 \
		tracing-core-0.1.31 \
		try-lock-0.2.4 \
		typenum-1.16.0 \
		unicode-bidi-0.3.13 \
		unicode-ident-1.0.9 \
		unicode-normalization-0.1.22 \
		unicode-width-0.1.10 \
		untrusted-0.7.1 \
		url-2.4.0 \
		utf8parse-0.2.1 \
		version_check-0.9.4 \
		vswhom-0.1.0 \
		vswhom-sys-0.1.2 \
		want-0.3.1 \
		wasi-0.10.0+wasi-snapshot-preview1 \
		wasi-0.11.0+wasi-snapshot-preview1 \
		wasm-bindgen-0.2.87 \
		wasm-bindgen-backend-0.2.87 \
		wasm-bindgen-futures-0.4.37 \
		wasm-bindgen-macro-0.2.87 \
		wasm-bindgen-macro-support-0.2.87 \
		wasm-bindgen-shared-0.2.87 \
		web-sys-0.3.64 \
		webpki-0.22.0 \
		webpki-roots-0.22.6 \
		winapi-0.3.9 \
		winapi-i686-pc-windows-gnu-0.4.0 \
		winapi-util-0.1.5 \
		winapi-x86_64-pc-windows-gnu-0.4.0 \
		windows-0.48.0 \
		windows-sys-0.42.0 \
		windows-sys-0.48.0 \
		windows-targets-0.48.1 \
		windows_aarch64_gnullvm-0.42.2 \
		windows_aarch64_gnullvm-0.48.0 \
		windows_aarch64_msvc-0.42.2 \
		windows_aarch64_msvc-0.48.0 \
		windows_i686_gnu-0.42.2 \
		windows_i686_gnu-0.48.0 \
		windows_i686_msvc-0.42.2 \
		windows_i686_msvc-0.48.0 \
		windows_x86_64_gnu-0.42.2 \
		windows_x86_64_gnu-0.48.0 \
		windows_x86_64_gnullvm-0.42.2 \
		windows_x86_64_gnullvm-0.48.0 \
		windows_x86_64_msvc-0.42.2 \
		windows_x86_64_msvc-0.48.0 \
		winreg-0.10.1 \
		xattr-0.2.3 \
		xz2-0.1.7 \
		yansi-0.5.1 \
		zip-0.6.6 \
		zstd-0.11.2+zstd.1.5.2 \
		zstd-safe-5.0.2+zstd.1.5.2 \
		zstd-sys-2.0.8+zstd.1.5.5

PLIST_FILES=	bin/${PORTNAME}

post-install:
	@${STRIP_CMD} ${STAGEDIR}${PREFIX}/bin/${PORTNAME}

.include <bsd.port.mk>
