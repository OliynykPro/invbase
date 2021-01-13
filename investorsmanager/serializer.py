from rest_framework import serializers
from investorsmanager.models import Investor, InteractionStatus, TypeOfInvestor

#INVESTOR SERIALIZER
class InvestorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Investor
        fields = "__all__"

#INTERACTIONSTATUS SERIALIZER
class InteractionStatusSerializer(serializers.ModelSerializer):
    class Meta:
        model = InteractionStatus
        fields = "__all__"

#TYPEOFINVESTOR SERIALIZER
class TypeOfInvestorSerializer(serializers.ModelSerializer):
    class Meta:
        model = TypeOfInvestor
        fields = "__all__"