--- chrome/browser/resources/settings/route.ts.orig	2024-01-30 07:53:34 UTC
+++ chrome/browser/resources/settings/route.ts
@@ -245,7 +245,7 @@ function createBrowserSettingsRoutes(): SettingsRoutes
     r.ACCESSIBILITY = r.ADVANCED.createSection(
         '/accessibility', 'a11y', loadTimeData.getString('a11yPageTitle'));
 
-    // <if expr="is_linux">
+    // <if expr="is_posix">
     r.CAPTIONS = r.ACCESSIBILITY.createChild('/captions');
     // </if>
 
