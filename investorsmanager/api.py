from investorsmanager.models import Investor, InteractionStatus, TypeOfInvestor
from rest_framework import viewsets, permissions
from .serializer import InvestorSerializer, InteractionStatusSerializer, TypeOfInvestorSerializer

#INVESTOR VIEWSET
class InverstorViewSet(viewsets.ModelViewSet):
    queryset = Investor.objects.all()
    permission_classes = [
        # permissions.AllowAny
        permissions.IsAuthenticated
    ]
    serializer_class = InvestorSerializer

#INTERACTION STATUS VIEWSET
class InteractionStatusViewSet(viewsets.ModelViewSet):
    queryset = InteractionStatus.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = InteractionStatusSerializer

#TYPE OF INVESTOR VIEWSET
class TypeOfInvestorViewSet(viewsets.ModelViewSet):
    queryset = TypeOfInvestor.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = TypeOfInvestorSerializer