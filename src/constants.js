export const app1 = `
apiVersion: app.k8s.io/v1beta1
kind: Application
metadata:
  name: xxxzzz
  namespace: app
  labels:
    app.kubernetes.io/version: v2
    app.kubernetes.io/name: xxxzzz
  annotations:
    servicemesh.kubesphere.io/enabled: 'true'
spec:
  selector:
    matchLabels:
      app.kubernetes.io/version: v2
      app.kubernetes.io/name: xxxzzz
  addOwnerRef: true
  componentKinds:
    - group: ''
      kind: Service
    - group: extensions
      kind: Deployment
    - group: apps
      kind: StatefulSet
    - group: extensions
      kind: Ingress
    - group: servicemesh.kubesphere.io
      kind: Strategy
    - group: servicemesh.kubesphere.io
      kind: ServicePolicy
---
apiVersion: extensions/v1beta1
kind: Ingress
metadata:
  namespace: app
  labels:
    app.kubernetes.io/version: v2
    app.kubernetes.io/name: xxxzzz
spec:
  rules: []
---
apiVersion: apps/v1
kind: Deployment
metadata:
  namespace: app
  labels:
    app: xxxzz
    version: yyy
    app.kubernetes.io/version: v1
    app.kubernetes.io/name: xxxzz
  name: xxxzz-yyy
  annotations:
    servicemesh.kubesphere.io/enabled: 'true'
spec:
  replicas: 1
  selector:
    matchLabels:
      app: xxxzz
      version: yyy
      app.kubernetes.io/version: v1
      app.kubernetes.io/name: xxxzz
  template:
    metadata:
      labels:
        app: xxxzz
        version: yyy
        app.kubernetes.io/version: v1
        app.kubernetes.io/name: xxxzz
      annotations:
        kubesphere.io/containerSecrets: null
        sidecar.istio.io/inject: 'true'
    spec:
      containers:
        - type: worker
          name: xxx-ifz1r5
          imagePullPolicy: IfNotPresent
          resources:
            requests:
              cpu: 70m
              memory: 10Mi
            limits:
              cpu: '1'
              memory: 2000Mi
          image: xxx
          ports:
            - name: tcp-6379
              protocol: TCP
              containerPort: 6379
              servicePort: 6379
      serviceAccount: default
      imagePullSecrets: null
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxUnavailable: 25%
      maxSurge: 25%
---
apiVersion: v1
kind: Service
metadata:
  namespace: app
  labels:
    app: xxxzz
    app.kubernetes.io/version: v1
    app.kubernetes.io/name: xxxzz
  annotations:
    kubesphere.io/workloadType: Deployment
    servicemesh.kubesphere.io/enabled: 'true'
  name: xxxzz
spec:
  sessionAffinity: None
  selector:
    app: xxxzz
    app.kubernetes.io/version: v1
    app.kubernetes.io/name: xxxzz
  ports:
    - name: tcp-6379
      protocol: TCP
      port: 6379
      targetPort: 6379
`;

export const app2 = `
apiVersion: app.k8s.io/v1beta1
kind: Application
metadata:
  name: yyy
  namespace: app
  labels:
    app.kubernetes.io/version: v2
    app.kubernetes.io/name: yyy
  annotations:
    servicemesh.kubesphere.io/enabled: 'true'
spec:
  selector:
    matchLabels:
      app.kubernetes.io/version: v2
      app.kubernetes.io/name: yyy
  addOwnerRef: true
  componentKinds:
    - group: ''
      kind: Service
    - group: extensions
      kind: Deployment
    - group: apps
      kind: StatefulSet
    - group: extensions
      kind: Ingress
    - group: servicemesh.kubesphere.io
      kind: Strategy
    - group: servicemesh.kubesphere.io
      kind: ServicePolicy
---
apiVersion: extensions/v1beta1
kind: Ingress
metadata:
  namespace: app
  labels:
    app.kubernetes.io/version: v2
    app.kubernetes.io/name: yyy
spec:
  rules: []
---
apiVersion: apps/v1
kind: Deployment
metadata:
  namespace: app
  labels:
    app: xxxzz
    version: yyy
    app.kubernetes.io/version: v1
    app.kubernetes.io/name: xxxzz
  name: xxxzz-yyy
  annotations:
    servicemesh.kubesphere.io/enabled: 'true'
spec:
  replicas: 1
  selector:
    matchLabels:
      app: xxxzz
      version: yyy
      app.kubernetes.io/version: v1
      app.kubernetes.io/name: xxxzz
  template:
    metadata:
      labels:
        app: xxxzz
        version: yyy
        app.kubernetes.io/version: v1
        app.kubernetes.io/name: xxxzz
      annotations:
        kubesphere.io/containerSecrets: null
        sidecar.istio.io/inject: 'true'
    spec:
      containers:
        - type: worker
          name: xxx-ifz1r5
          imagePullPolicy: IfNotPresent
          resources:
            requests:
              cpu: 70m
              memory: 10Mi
            limits:
              cpu: '1'
              memory: 2000Mi
          image: xxx
          ports:
            - name: tcp-6379
              protocol: TCP
              containerPort: 6379
              servicePort: 6379
      serviceAccount: default
      imagePullSecrets: null
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxUnavailable: 25%
      maxSurge: 25%
---
apiVersion: v1
kind: Service
metadata:
  namespace: app
  labels:
    app: xxxzz
    app.kubernetes.io/version: v1
    app.kubernetes.io/name: xxxzz
  annotations:
    kubesphere.io/workloadType: Deployment
    servicemesh.kubesphere.io/enabled: 'true'
  name: xxxzz
spec:
  sessionAffinity: None
  selector:
    app: xxxzz
    app.kubernetes.io/version: v1
    app.kubernetes.io/name: xxxzz
  ports:
    - name: tcp-6379
      protocol: TCP
      port: 6379
      targetPort: 6379
`;
