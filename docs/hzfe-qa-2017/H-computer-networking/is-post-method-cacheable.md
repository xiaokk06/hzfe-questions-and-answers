# is post method cacheable?

> Responses to this method are not cacheable, unless the response includes appropriate Cache-Control or Expires header fields. However, the 303 (See Other) response can be used to direct the user agent to retrieve a cacheable resource.

上面是RFC文档 9.5小节对于POST方法的描述，简单解释下，post方法是不可缓存的，除非响应报文的header中包含 Cache-Control或者 Expires 字段。响应状态码为303时可以直接从user agent(一般是浏览器)或取回缓存的资源。

上面关于POST请求的解释看来，POST方法应该是可以缓存的。然而在该文档第13章Caching in HTTP中又有这样一段话：

> Some HTTP methods MUST cause a cache to invalidate an entity. This is either the entity referred to by the Request-URI, or by the Location or Content-Location headers (if present). These methods are:
>  - PUT
>  - DELETE
>  - POST

意思是有些HTTP方法保留缓存使实体失效，其中就包括POST方法。看到这里可能会有点疑问，既然POST方法可以使实体失效，那POST方法还是可缓存的吗？

别急，后面那句话才是重点。这个实体可以是 Request-URI引用的实体，也可以是响应header中包含Location和Content-Location字段的请求。也就是说当一个POST请求完成之后，会使得相同URI之前的缓存失效。举个例子:

### 相同URI

对于一个接口/foo，如果是GET请求，则可以缓存对应的响应。但是如果是POST请求（即便响应头里没有Cache-Control字段），则会使/foo路径之前的GET请求缓存失效。虽然这个之前的缓存失效了，但是如果下一个请求是GET请求相同的URI即/foo时，GET可以直接使用上次POST请求的缓存作为响应。

### Content-Location

当一个POST请求响应报文中带有Content_Location字段时，下一次以GET或HEAD方式请求Content-Location对应的URI时会直接返回POST请求响应报文。

### 总结

综上所述，POST请求是cacheable的，只不过有一定的前提条件，而且使用的场景也很有限，因此官方并不太推荐。

PS：其实上面说到的303请求的情况其实可以包含在响应报文header的Location字段中，Location请求中就包含303的响应状态码。

### 参考资料

- [Caching POST](https://www.mnot.net/blog/2012/09/24/caching_POST)
- [Location MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Location)
- [Content-Location](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Location)
- [https://tools.ietf.org/html/draft-ietf-httpbis-p2-semantics-20#section-2.3.4](https://tools.ietf.org/html/draft-ietf-httpbis-p2-semantics-20#section-2.3.4)
- [is-it-possible-to-cache-post-methods-in-http](https://stackoverflow.com/questions/626057/is-it-possible-to-cache-post-methods-in-http)




